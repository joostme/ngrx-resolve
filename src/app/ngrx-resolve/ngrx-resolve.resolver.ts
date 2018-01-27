import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { AppState } from '../store/app-state.model';
import { Store } from '@ngrx/store';
import { isUndefined, omit } from 'lodash';
import { Resolve } from '@angular/router/src/interfaces';
import { NgrxResolveConfig } from './ngrx-resolve-config.model';

@Injectable()
export class NgrxResolve implements Resolve<boolean> {

  constructor(
    private store: Store<AppState>
  ) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const config: NgrxResolveConfig = route.data.ngrx;

    if (!isUndefined(config.triggers)) {
      config.triggers.forEach(trigger => {
        this.log(`Triggering ${trigger.name}`);
        trigger(this.store, route.params, omit(route.data, 'ngrx'));
      });
    }

    if (!isUndefined(config.watch)) {
      return Observable.forkJoin(
        ...config.watch.map(watcher => {
          this.log(`Watching ${watcher.name}`);
          return watcher(this.store)
            .do(() => this.log(`${watcher.name} resolved`))
            .first();
        })
      ).map(() => true);
    }
    return Observable.of(true);
  }

  private log(value) {
    console.log(`%c[NGRX Resolve] ${value}`, 'color:green');
  }
}

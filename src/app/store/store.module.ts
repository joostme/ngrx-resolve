import { NgModule, InjectionToken } from '@angular/core';
import { ActionReducerMap, StoreModule as NgrxStoreModule } from '@ngrx/store';
import { getReducers } from './reducers';
import { AppState } from './app-state.model';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

@NgModule({
  imports: [
    NgrxStoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(effects),
    !environment.production ?
      StoreDevtoolsModule.instrument({
        maxAge: 25
      })
      : []
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    }
  ]
})
export class StoreModule { }

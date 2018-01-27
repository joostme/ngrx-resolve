import { TriggerFn, WatchFn, NgrxResolveConfig } from '../ngrx-resolve/ngrx-resolve-config.model';
import { LoadBooksAction, SelectBookAction } from '../store/books/books.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state.model';
import { toNumber } from 'lodash';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';

const triggerBookDetails: TriggerFn =
  (store: Store<AppState>, params: { id: string }) => store.dispatch(new SelectBookAction(toNumber(params.id)));


const triggerLoadBooks: TriggerFn =
  (store: Store<AppState>) => store.dispatch(new LoadBooksAction());


const waitForBooksLoaded: WatchFn =
  (store: Store<AppState>) => {
    return store.select(state => state.books.loaded)
      .filter(loaded => !!loaded)
      .first();
  };


export const ngrxResolveBooksConfig: NgrxResolveConfig = {
  triggers: [
    triggerLoadBooks
  ],
  watch: [
    waitForBooksLoaded
  ]
};

export const ngrxResolveBookDetailConfig: NgrxResolveConfig = {
  triggers: [
    triggerBookDetails
  ]
};



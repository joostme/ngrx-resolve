import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export type TriggerFn = (store: Store<any>, params?: {[key: string]: string}, data?:  {[key: string]: string}) => void;
export type WatchFn = (store: Store<any>) => Observable<boolean>;

export interface NgrxResolveConfig {
  triggers?: TriggerFn[];
  watch?: WatchFn[];
}

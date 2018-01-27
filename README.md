# ngrx-resolve

This example app shows the usage of a Routing Resolver for NGRX. This couples the route config tightly to the data loading of NGRX.

It ensures that data is loaded before a route or child routes are entered.

The resolver is configured using the `data` object of the route.

## Data Config

The data config has the following interface:

```ts
export interface NgrxResolveConfig {
    triggers?: TriggerFn[];
    watch?: WatchFn[];
}
```

Whereas the `TriggerFn` and `WatchFn` are the following types:

```ts
export type TriggerFn = (store: Store<any>, params?: {[key: string]: string}, data?:  {[key: string]: string}) => void;


export type WatchFn = (store: Store<any>) => Observable<boolean>;
```

Every function is called with the NGRX Store instance.
The `TriggerFn` is additionally called with the routes params as well as the `data` object **(without the `ngrx` property)**

This data config is then added to the routes `data` object together with the `NgrxResolve` and the `resolve` option of the route.

**NOTE: Adding it to the `ngrx` property is important!**

```ts
{
    path: 'books',
    loadChildren: 'app/book-module/book.module#BookModule',
    resolve: {
      ngrx: NgrxResolve
    },
    data: {
      ngrx: ngrxResolveBooksConfig
    }
  }
```

## How it works

Before entering the route, the `NgrxResolve` will call all defined trigger functions with the NGRX Store as well as the route parameters.

After calling each trigger function the resolver then returns an `Observable<boolean>`. This observable will only resolve when all the watch functions also resolve `true`.

## Example

This app provides an example application on how to use this data resolver together with a list of books.

The detail page of a book depends on the list of books - so we have to ensure they are loaded before routing to the detail page. The configuration for the loading of the books as well as waiting for the loading to finish looks like this:

```ts
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
```
We use variables here instead of functions to be type safe and use the `TriggerFn` as well as `WatchFn` types.

Notice how `waitForBooksLoaded` returns an Observable that only returns `true`. And also only one time. **This is important!**

The configuration for the detail page of a book then looks like this:

```ts
const triggerBookDetails: TriggerFn =
  (store: Store<AppState>, params: { id: string }) => store.dispatch(new SelectBookAction(toNumber(params.id)));


export const ngrxResolveBookDetailConfig: NgrxResolveConfig = {
  triggers: [
    triggerBookDetails
  ]
};
```

This way the data in the NGRX store is more tightly coupled to the routes and allows for a more modular approach of bundling the application.

# Start the application

Simply

```bash
npm install
```

and then


```bash
npm start
```

The app will start on `http://localhost:4200`


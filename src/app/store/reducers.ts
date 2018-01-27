import { AppState } from './app-state.model';
import { ActionReducerMap } from '@ngrx/store';
import { booksReducer } from './books/books.reducer';

export function getReducers(): ActionReducerMap<AppState> {
    return {
        books: booksReducer
    };
}


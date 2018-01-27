import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';
import { BooksActionTypes, BooksLoadedAction, SelectBookAction } from './books.actions';

export interface BookState {
    loading: boolean;
    loaded: boolean;
    books: Book[];
    selectedBook: Book;
}

const initialState: BookState = {
    loading: false,
    loaded: false,
    books: [],
    selectedBook: null
};

export function booksReducer(state: BookState = initialState, action: Action) {
    switch (action.type) {
        case BooksActionTypes.LoadBooks:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case BooksActionTypes.BooksLoaded:
            return {
                ...state,
                loading: false,
                loaded: true,
                books: (<BooksLoadedAction> action).payload
            };
        case BooksActionTypes.SelectBook:
            const selectedBook = state.books.find(book => book.id === (<SelectBookAction> action).payload);
            return {
                ...state,
                selectedBook
            };
        default:
            return state;
    }
}

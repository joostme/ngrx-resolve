import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';

export enum BooksActionTypes {
    LoadBooks = '[Books] Load books',
    BooksLoaded = '[Books] Books loaded',
    SelectBook = '[Books] Select book'
}

export class LoadBooksAction implements Action {
    type = BooksActionTypes.LoadBooks;
}

export class BooksLoadedAction implements Action {
    type = BooksActionTypes.BooksLoaded;
    constructor(
        public payload: Book[]
    ) {}
}

export class SelectBookAction implements Action {
    type = BooksActionTypes.SelectBook;
    constructor(
        public payload: number
    ) { }
}

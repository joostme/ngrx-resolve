import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { BooksActionTypes, BooksLoadedAction } from './books.actions';
import 'rxjs/add/operator/switchMap';
import { BooksService } from '../../services/books.service';


@Injectable()
export class BookEffects {
    constructor(
        private actions: Actions,
        private booksService: BooksService
    ) {}

    @Effect()
    loadBooks = this.actions
        .ofType(BooksActionTypes.LoadBooks)
        .switchMap(() => {
            return this.booksService.loadBooks()
                .map(books => new BooksLoadedAction(books));
        });
}

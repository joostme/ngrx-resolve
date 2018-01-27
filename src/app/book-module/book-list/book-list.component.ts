import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../models/book.model';
import { getBooks } from '../../store/books/books.selectors';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

    books: Observable<Book[]>;

    constructor(
        private store: Store<AppState>
    ) {
        this.books = this.store.select(getBooks());
    }
}

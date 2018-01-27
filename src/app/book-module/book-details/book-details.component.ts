import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../models/book.model';
import { getSelectedBook } from '../../store/books/books.selectors';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

    book: Observable<Book>;

  constructor(
      private store: Store<AppState>
  ) {
    this.book = this.store.select(getSelectedBook());
  }
}

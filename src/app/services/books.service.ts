import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book.model';
@Injectable()
export class BooksService {
    constructor(
        private httpClient: HttpClient
    ) {}

    loadBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>('assets/books.json');
    }
}

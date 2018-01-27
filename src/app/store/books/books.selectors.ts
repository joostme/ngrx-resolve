import { AppState } from '../app-state.model';

export function getBooks() {
    return (state: AppState) => state.books.books;
}

export function getSelectedBook() {
    return (state: AppState) => state.books.selectedBook;
}

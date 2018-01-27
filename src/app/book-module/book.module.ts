import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book.routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
    imports: [
        CommonModule,
        BookRoutingModule
    ],
    declarations: [
        BookListComponent,
        BookDetailsComponent
    ]
})
export class BookModule {
}

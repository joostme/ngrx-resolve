import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
    {
        path: '',
        component: BookListComponent
    },
    {
        path: ':id',
        component: BookDetailsComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BookRoutingModule {
}

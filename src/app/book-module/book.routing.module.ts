import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgrxResolve } from '../ngrx-resolve/ngrx-resolve.resolver';
import { ngrxResolveBookDetailConfig } from './book.ngrx-resolve';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: ':id',
    component: BookDetailsComponent,
    resolve: {
      ngrx: NgrxResolve
    },
    data: {
      ngrx: ngrxResolveBookDetailConfig
    }
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

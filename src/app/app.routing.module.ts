import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppState } from './store/app-state.model';
import { Store } from '@ngrx/store';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    {
        path: 'books',
        loadChildren: 'app/book-module/book.module#BookModule',
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}

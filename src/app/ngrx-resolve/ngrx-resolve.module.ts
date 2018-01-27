import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgrxResolve } from './ngrx-resolve.resolver';

@NgModule({
    imports: [
        CommonModule,
        StoreModule
    ],
    providers: [
        NgrxResolve
    ]
})
export class NgrxResolveModule {
}

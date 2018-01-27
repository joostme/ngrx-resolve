import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { StoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/books.service';
import { NgrxResolveModule } from './ngrx-resolve/ngrx-resolve.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    HttpClientModule,
    NgrxResolveModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

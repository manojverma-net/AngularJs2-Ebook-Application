import { provideRouter, RouterConfig } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './bookdetails/book-details.component';

/**
 * Import modules for Hash routing
 */
import { LocationStrategy,HashLocationStrategy } from '@angular/common'; 

const routes: RouterConfig = [
    { path: '#',redirectTo: '/books',pathMatch: 'full'},
    { path: '',redirectTo: '/books',pathMatch: 'full'},
    { path: 'books', component: BooksComponent },
    { path: 'book-details/:Id', component: BookDetailsComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];

/**
 * Enable Hash routing like Angular 1 
 * Link : https://yakovfain.com/2015/11/02/angular-2-router-high-level-overview/
 */
export const enableHashRouting = {
    provide: LocationStrategy, 
    useClass: HashLocationStrategy
  }
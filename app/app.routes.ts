import { provideRouter, RouterConfig } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './bookdetails/book-details.component';

const routes: RouterConfig = [
    { path: '#',redirectTo: '/books',pathMatch: 'full'},
    { path: '',redirectTo: '/books',pathMatch: 'full'},
    { path: 'books', component: BooksComponent },
    { path: 'book-details/:Id', component: BookDetailsComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
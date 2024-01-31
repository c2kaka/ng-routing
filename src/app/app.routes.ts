import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ShoesComponent } from './shoes/shoes.component';
import {BookDetailComponent} from "./book-detail/book-detail.component";

export const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'book/:id',
    data: {
      description: 'This is the book detail page',
    },
    component: BookDetailComponent,
  },
  {
    path: 'shoes',
    component: ShoesComponent,
  },
];

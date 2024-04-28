import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DetailsComponent } from './details/details.component';


const routeConfig: Routes = [
  {
    path: '',
    component: BooksComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;
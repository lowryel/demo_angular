import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { BooksComponent } from '../app/books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}

import { Component, inject } from '@angular/core'; // the inject directive inject dependency into the parent component
import { HousingLocationComponentComponent } from '../housing-location-component/housing-location-component.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HousingLocationComponentComponent, NgForOf],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  ngOnInit() {
    console.log(this.baseUrl);
  }

}

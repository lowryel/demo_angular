import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location-component',
  standalone: true,
  imports: [],
  templateUrl: './housing-location-component.component.html',
  styleUrl: './housing-location-component.component.css'
})

// The child component, HousingLocationComponentComponent. The componenet that uses this in it's template is the parent component.
export class HousingLocationComponentComponent {
  @Input() housingLocation!: Housinglocation // The @Input() decorator handles DOM updates
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-characterfilter',
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css'],
})
export class CharacterFilterComponent {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  @Output() selectedHouse = new EventEmitter<string>();

  filterByHouse(house: string) {
    this.selectedHouse.emit(house);
  }
}

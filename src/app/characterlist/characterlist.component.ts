import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../harrypotter.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private hpService: HarryPotterService) {}

  ngOnInit(): void {
    this.hpService.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }
}

iimport { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService } from '../harrypotter.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private hpService: HarryPotterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe((data) => {
        this.character = data;
      });
    }
  }
}

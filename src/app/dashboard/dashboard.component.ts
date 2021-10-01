import { Component, OnInit } from '@angular/core';
import { Essence } from '../essence';
import { EssenceService } from './../essence.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  essences: Essence[] = [];

  constructor(private essenceService: EssenceService) { }

  ngOnInit(): void {
    this.getEssences();
  }

  getEssences(): void {
    this.essenceService.getEssences().subscribe(essences => this.essences = essences);
  }

  getEssencesOfRarity(rarity: Number): Essence[] {
    return this.essences.filter(essence => essence.rarity == rarity);
  }

}

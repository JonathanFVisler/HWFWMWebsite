import { Component, OnInit } from '@angular/core';
import { Essence } from '../essence';
import { EssenceService } from './../essence.service';
import { supportFunctions } from '../support-functions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  essences: Essence[] = [];
  displayBaseEssences: boolean = true;
  displayConfluences: boolean = true;

  constructor(private essenceService: EssenceService) { }

  ngOnInit(): void {
    this.getEssences();
  }

  getEssences(): void {
    this.essenceService.getEssences().subscribe(essences => this.essences = essences);
  }

  getEssencesOfRarity(rarity: Number): Essence[] {
    return supportFunctions.getEssencesOfRarity(rarity, this.essences);
  }

  getConfluenceEssences() {
    return supportFunctions.getConFluenceEssences(this.essences);
  }

  setDisplayConfluence(input: boolean): void {
    this.displayConfluences = input;
  }

}

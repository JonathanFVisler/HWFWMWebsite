import { EssenceService } from './../essence.service';
import { Essence } from './../essence';
import { Component, OnInit } from '@angular/core';
import { supportFunctions } from '../support-functions';

@Component({
  selector: 'app-essence-list',
  templateUrl: './essence-list.component.html',
  styleUrls: ['./essence-list.component.css']
})
export class EssenceListComponent implements OnInit {

  displayBaseEssences:boolean=true;
  displayConfluences:boolean=true;

  essences: Essence[] = [];

  constructor(private EssenceService: EssenceService) { }

  ngOnInit(): void {
    this.getEssences();
  }

  getEssences(): void {
    this.EssenceService.getEssences().subscribe(essences => this.essences = essences);
  }

  selectedEssence?: Essence;
  onSelect(essence: Essence): void {
    this.selectedEssence = essence;
  }
  
  getEssencesOfRarity(rarity: Number, essences?: Essence[]): Essence[] {
    if(typeof essences !== "undefined"){
      return supportFunctions.getEssencesOfRarity(rarity, essences);
    }
    return supportFunctions.getEssencesOfRarity(rarity, this.essences);
  }

  getConfluenceEssences(): Essence[] {
    return supportFunctions.getConFluenceEssences(this.essences);
  }

  getEssencesInLextograficOrder(): Essence[] {
    return supportFunctions.getEssencesInLextograficOrder(this.essences);
  }

  getEssencesInIdOrder(): Essence[] {
    return supportFunctions.getEssencesInIdOrder(this.essences);
  }
}

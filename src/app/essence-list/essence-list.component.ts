import { EssenceService } from './../essence.service';
import { Essence } from './../essence';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-essence-list',
  templateUrl: './essence-list.component.html',
  styleUrls: ['./essence-list.component.css']
})
export class EssenceListComponent implements OnInit {

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
  

}

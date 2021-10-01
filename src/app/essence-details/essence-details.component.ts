import { Component, OnInit, Input } from '@angular/core';
import { Essence } from '../essence'
import { supportFunctions } from '../support-functions'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EssenceService } from '../essence.service';

@Component({
  selector: 'app-essence-details',
  templateUrl: './essence-details.component.html',
  styleUrls: ['./essence-details.component.css']
})
export class EssenceDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private essenceService: EssenceService,
    private location: Location
  ) { }

  @Input() essence?: Essence | undefined;

  ngOnInit(): void {
    this.getEssence();
  }

  goBack(): void {
    this.location.back();
  }

  getEssence(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log("Id: " + id);
    this.essenceService.getEssence(id).subscribe(essence => this.essence = essence);
  }

  rarityNumberToString(number: Number): string{
    return supportFunctions.rarityNumberToString(number);
  }
  
  boolToYesNo(input: boolean): string{
    return supportFunctions.boolToYesNo(input);
  }
}

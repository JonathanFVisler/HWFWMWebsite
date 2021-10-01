import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceDetailsComponent } from './essence-details.component';

describe('EssenceDetailsComponent', () => {
  let component: EssenceDetailsComponent;
  let fixture: ComponentFixture<EssenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssenceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

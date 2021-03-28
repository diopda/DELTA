import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsaisonComponent } from './detailsaison.component';

describe('DetailsaisonComponent', () => {
  let component: DetailsaisonComponent;
  let fixture: ComponentFixture<DetailsaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutgestionnaireComponent } from './ajoutgestionnaire.component';

describe('AjoutgestionnaireComponent', () => {
  let component: AjoutgestionnaireComponent;
  let fixture: ComponentFixture<AjoutgestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutgestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutgestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

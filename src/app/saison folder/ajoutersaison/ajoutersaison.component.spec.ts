import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutersaisonComponent } from './ajoutersaison.component';

describe('AjoutersaisonComponent', () => {
  let component: AjoutersaisonComponent;
  let fixture: ComponentFixture<AjoutersaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutersaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutersaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

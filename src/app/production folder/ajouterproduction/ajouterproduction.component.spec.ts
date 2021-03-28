import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterproductionComponent } from './ajouterproduction.component';

describe('AjouterproductionComponent', () => {
  let component: AjouterproductionComponent;
  let fixture: ComponentFixture<AjouterproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

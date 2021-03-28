import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermaintenanceComponent } from './ajoutermaintenance.component';

describe('AjoutermaintenanceComponent', () => {
  let component: AjoutermaintenanceComponent;
  let fixture: ComponentFixture<AjoutermaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutermaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

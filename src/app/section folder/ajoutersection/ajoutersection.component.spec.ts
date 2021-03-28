import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutersectionComponent } from './ajoutersection.component';

describe('AjoutersectionComponent', () => {
  let component: AjoutersectionComponent;
  let fixture: ComponentFixture<AjoutersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutersectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

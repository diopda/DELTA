import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermachineComponent } from './ajoutermachine.component';

describe('AjoutermachineComponent', () => {
  let component: AjoutermachineComponent;
  let fixture: ComponentFixture<AjoutermachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutermachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

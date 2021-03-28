import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterunionComponent } from './ajouterunion.component';

describe('AjouterunionComponent', () => {
  let component: AjouterunionComponent;
  let fixture: ComponentFixture<AjouterunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

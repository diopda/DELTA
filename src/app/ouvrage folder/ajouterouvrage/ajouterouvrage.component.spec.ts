import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterouvrageComponent } from './ajouterouvrage.component';

describe('AjouterouvrageComponent', () => {
  let component: AjouterouvrageComponent;
  let fixture: ComponentFixture<AjouterouvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterouvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterouvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

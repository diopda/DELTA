import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbailleurComponent } from './ajouterbailleur.component';

describe('AjouterbailleurComponent', () => {
  let component: AjouterbailleurComponent;
  let fixture: ComponentFixture<AjouterbailleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbailleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

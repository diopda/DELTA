import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutvillageComponent } from './ajoutvillage.component';

describe('AjoutvillageComponent', () => {
  let component: AjoutvillageComponent;
  let fixture: ComponentFixture<AjoutvillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutvillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutvillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

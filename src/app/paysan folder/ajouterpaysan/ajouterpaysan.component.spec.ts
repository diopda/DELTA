import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpaysanComponent } from './ajouterpaysan.component';

describe('AjouterpaysanComponent', () => {
  let component: AjouterpaysanComponent;
  let fixture: ComponentFixture<AjouterpaysanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpaysanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpaysanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

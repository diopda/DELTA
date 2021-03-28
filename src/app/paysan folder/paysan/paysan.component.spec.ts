import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysanComponent } from './paysan.component';

describe('PaysanComponent', () => {
  let component: PaysanComponent;
  let fixture: ComponentFixture<PaysanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

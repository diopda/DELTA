import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoitedialogueComponent } from './boitedialogue.component';

describe('BoitedialogueComponent', () => {
  let component: BoitedialogueComponent;
  let fixture: ComponentFixture<BoitedialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoitedialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoitedialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

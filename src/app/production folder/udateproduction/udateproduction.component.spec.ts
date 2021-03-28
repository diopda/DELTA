import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdateproductionComponent } from './udateproduction.component';

describe('UdateproductionComponent', () => {
  let component: UdateproductionComponent;
  let fixture: ComponentFixture<UdateproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdateproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdateproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

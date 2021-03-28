import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproductionComponent } from './detailproduction.component';

describe('DetailproductionComponent', () => {
  let component: DetailproductionComponent;
  let fixture: ComponentFixture<DetailproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

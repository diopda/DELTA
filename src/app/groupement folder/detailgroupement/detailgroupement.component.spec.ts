import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgroupementComponent } from './detailgroupement.component';

describe('DetailgroupementComponent', () => {
  let component: DetailgroupementComponent;
  let fixture: ComponentFixture<DetailgroupementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailgroupementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgroupementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailvillageComponent } from './detailvillage.component';

describe('DetailvillageComponent', () => {
  let component: DetailvillageComponent;
  let fixture: ComponentFixture<DetailvillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailvillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailvillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

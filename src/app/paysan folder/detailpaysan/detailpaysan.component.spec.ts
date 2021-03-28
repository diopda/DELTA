import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpaysanComponent } from './detailpaysan.component';

describe('DetailpaysanComponent', () => {
  let component: DetailpaysanComponent;
  let fixture: ComponentFixture<DetailpaysanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpaysanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpaysanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

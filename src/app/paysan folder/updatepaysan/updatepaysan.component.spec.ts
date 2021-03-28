import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepaysanComponent } from './updatepaysan.component';

describe('UpdatepaysanComponent', () => {
  let component: UpdatepaysanComponent;
  let fixture: ComponentFixture<UpdatepaysanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepaysanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepaysanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

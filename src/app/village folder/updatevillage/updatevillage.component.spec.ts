import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevillageComponent } from './updatevillage.component';

describe('UpdatevillageComponent', () => {
  let component: UpdatevillageComponent;
  let fixture: ComponentFixture<UpdatevillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

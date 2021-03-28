import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecuvetteComponent } from './updatecuvette.component';

describe('UpdatecuvetteComponent', () => {
  let component: UpdatecuvetteComponent;
  let fixture: ComponentFixture<UpdatecuvetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecuvetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecuvetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

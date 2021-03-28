import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateunionComponent } from './updateunion.component';

describe('UpdateunionComponent', () => {
  let component: UpdateunionComponent;
  let fixture: ComponentFixture<UpdateunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

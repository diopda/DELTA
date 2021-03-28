import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateouvrageComponent } from './updateouvrage.component';

describe('UpdateouvrageComponent', () => {
  let component: UpdateouvrageComponent;
  let fixture: ComponentFixture<UpdateouvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateouvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateouvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

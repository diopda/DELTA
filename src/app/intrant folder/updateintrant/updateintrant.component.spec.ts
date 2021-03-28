import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateintrantComponent } from './updateintrant.component';

describe('UpdateintrantComponent', () => {
  let component: UpdateintrantComponent;
  let fixture: ComponentFixture<UpdateintrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateintrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateintrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

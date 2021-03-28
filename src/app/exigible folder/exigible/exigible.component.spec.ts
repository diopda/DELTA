import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExigibleComponent } from './exigible.component';

describe('ExigibleComponent', () => {
  let component: ExigibleComponent;
  let fixture: ComponentFixture<ExigibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExigibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExigibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

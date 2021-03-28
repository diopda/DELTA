import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsectionComponent } from './detailsection.component';

describe('DetailsectionComponent', () => {
  let component: DetailsectionComponent;
  let fixture: ComponentFixture<DetailsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailouvrageComponent } from './detailouvrage.component';

describe('DetailouvrageComponent', () => {
  let component: DetailouvrageComponent;
  let fixture: ComponentFixture<DetailouvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailouvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailouvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

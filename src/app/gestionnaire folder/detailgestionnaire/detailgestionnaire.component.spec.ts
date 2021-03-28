import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgestionnaireComponent } from './detailgestionnaire.component';

describe('DetailgestionnaireComponent', () => {
  let component: DetailgestionnaireComponent;
  let fixture: ComponentFixture<DetailgestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailgestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

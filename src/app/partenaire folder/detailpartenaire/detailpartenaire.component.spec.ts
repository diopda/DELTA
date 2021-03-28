import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpartenaireComponent } from './detailpartenaire.component';

describe('DetailpartenaireComponent', () => {
  let component: DetailpartenaireComponent;
  let fixture: ComponentFixture<DetailpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

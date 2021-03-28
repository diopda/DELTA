import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcuvetteComponent } from './detailcuvette.component';

describe('DetailcuvetteComponent', () => {
  let component: DetailcuvetteComponent;
  let fixture: ComponentFixture<DetailcuvetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcuvetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcuvetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

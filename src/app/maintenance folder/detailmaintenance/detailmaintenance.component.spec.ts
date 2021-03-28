import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmaintenanceComponent } from './detailmaintenance.component';

describe('DetailmaintenanceComponent', () => {
  let component: DetailmaintenanceComponent;
  let fixture: ComponentFixture<DetailmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

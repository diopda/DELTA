import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemaintenanceComponent } from './updatemaintenance.component';

describe('UpdatemaintenanceComponent', () => {
  let component: UpdatemaintenanceComponent;
  let fixture: ComponentFixture<UpdatemaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

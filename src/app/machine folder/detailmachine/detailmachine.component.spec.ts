import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmachineComponent } from './detailmachine.component';

describe('DetailmachineComponent', () => {
  let component: DetailmachineComponent;
  let fixture: ComponentFixture<DetailmachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

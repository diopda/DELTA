import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailunionComponent } from './detailunion.component';

describe('DetailunionComponent', () => {
  let component: DetailunionComponent;
  let fixture: ComponentFixture<DetailunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

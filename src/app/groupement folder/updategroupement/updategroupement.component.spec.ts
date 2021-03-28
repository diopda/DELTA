import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategroupementComponent } from './updategroupement.component';

describe('UpdategroupementComponent', () => {
  let component: UpdategroupementComponent;
  let fixture: ComponentFixture<UpdategroupementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategroupementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategroupementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

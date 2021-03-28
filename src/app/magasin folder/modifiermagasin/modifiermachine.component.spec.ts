import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermachineComponent } from './modifiermachine.component';

describe('ModifiermachineComponent', () => {
  let component: ModifiermachineComponent;
  let fixture: ComponentFixture<ModifiermachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

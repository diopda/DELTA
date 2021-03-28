import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpartenaireComponent } from './modifierpartenaire.component';

describe('ModifierpartenaireComponent', () => {
  let component: ModifierpartenaireComponent;
  let fixture: ComponentFixture<ModifierpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierpartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

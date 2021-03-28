import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterintrantComponent } from './ajouterintrant.component';

describe('AjouterintrantComponent', () => {
  let component: AjouterintrantComponent;
  let fixture: ComponentFixture<AjouterintrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterintrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterintrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

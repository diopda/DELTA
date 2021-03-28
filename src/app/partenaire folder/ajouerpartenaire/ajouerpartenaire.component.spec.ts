import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouerpartenaireComponent } from './ajouerpartenaire.component';

describe('AjouerpartenaireComponent', () => {
  let component: AjouerpartenaireComponent;
  let fixture: ComponentFixture<AjouerpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouerpartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouerpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterconducteurComponent } from './ajouterconducteur.component';

describe('AjouterconducteurComponent', () => {
  let component: AjouterconducteurComponent;
  let fixture: ComponentFixture<AjouterconducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterconducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterconducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

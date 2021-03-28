import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterorganeComponent } from './ajouterorgane.component';

describe('AjouterorganeComponent', () => {
  let component: AjouterorganeComponent;
  let fixture: ComponentFixture<AjouterorganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterorganeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterorganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

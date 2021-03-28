import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutergroupementComponent } from './ajoutergroupement.component';

describe('AjoutergroupementComponent', () => {
  let component: AjoutergroupementComponent;
  let fixture: ComponentFixture<AjoutergroupementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutergroupementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutergroupementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbailleurComponent } from './detailbailleur.component';

describe('DetailbailleurComponent', () => {
  let component: DetailbailleurComponent;
  let fixture: ComponentFixture<DetailbailleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailbailleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

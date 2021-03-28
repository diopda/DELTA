import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuvetteComponent } from './cuvette.component';

describe('CuvetteComponent', () => {
  let component: CuvetteComponent;
  let fixture: ComponentFixture<CuvetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuvetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuvetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

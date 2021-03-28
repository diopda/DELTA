import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoutcuvetteComponent } from './joutcuvette.component';

describe('JoutcuvetteComponent', () => {
  let component: JoutcuvetteComponent;
  let fixture: ComponentFixture<JoutcuvetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoutcuvetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoutcuvetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganeComponent } from './organe.component';

describe('OrganeComponent', () => {
  let component: OrganeComponent;
  let fixture: ComponentFixture<OrganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

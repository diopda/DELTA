import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesaisonComponent } from './updatesaison.component';

describe('UpdatesaisonComponent', () => {
  let component: UpdatesaisonComponent;
  let fixture: ComponentFixture<UpdatesaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

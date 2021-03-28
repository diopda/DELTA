import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebayeurComponent } from './updatebayeur.component';

describe('UpdatebayeurComponent', () => {
  let component: UpdatebayeurComponent;
  let fixture: ComponentFixture<UpdatebayeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebayeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebayeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

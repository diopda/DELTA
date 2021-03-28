import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorganeComponent } from './updateorgane.component';

describe('UpdateorganeComponent', () => {
  let component: UpdateorganeComponent;
  let fixture: ComponentFixture<UpdateorganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateorganeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

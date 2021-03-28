import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorganeComponent } from './detailorgane.component';

describe('DetailorganeComponent', () => {
  let component: DetailorganeComponent;
  let fixture: ComponentFixture<DetailorganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailorganeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailorganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

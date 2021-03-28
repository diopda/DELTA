import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailintrantComponent } from './detailintrant.component';

describe('DetailintrantComponent', () => {
  let component: DetailintrantComponent;
  let fixture: ComponentFixture<DetailintrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailintrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailintrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailconducteurComponent } from './detailconducteur.component';

describe('DetailconducteurComponent', () => {
  let component: DetailconducteurComponent;
  let fixture: ComponentFixture<DetailconducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailconducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailconducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

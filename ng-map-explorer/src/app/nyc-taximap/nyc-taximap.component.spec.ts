import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NycTaximapComponent } from './nyc-taximap.component';

describe('NycTaximapComponent', () => {
  let component: NycTaximapComponent;
  let fixture: ComponentFixture<NycTaximapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NycTaximapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NycTaximapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverPointComponent } from './deliver-point.component';

describe('DeliverPointComponent', () => {
  let component: DeliverPointComponent;
  let fixture: ComponentFixture<DeliverPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

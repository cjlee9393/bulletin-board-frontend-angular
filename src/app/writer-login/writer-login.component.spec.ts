import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterLoginComponent } from './writer-login.component';

describe('WriterLoginComponent', () => {
  let component: WriterLoginComponent;
  let fixture: ComponentFixture<WriterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

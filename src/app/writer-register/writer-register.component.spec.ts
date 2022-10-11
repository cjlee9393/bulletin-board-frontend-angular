import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterRegisterComponent } from './writer-register.component';

describe('WriterRegisterComponent', () => {
  let component: WriterRegisterComponent;
  let fixture: ComponentFixture<WriterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

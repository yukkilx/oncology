import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoIncInputComponent } from './auto-inc-input.component';

describe('AutoIncInputComponent', () => {
  let component: AutoIncInputComponent;
  let fixture: ComponentFixture<AutoIncInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoIncInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoIncInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

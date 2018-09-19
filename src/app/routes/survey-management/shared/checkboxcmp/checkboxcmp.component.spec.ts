import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxcmpComponent } from './checkboxcmp.component';

describe('CheckboxcmpComponent', () => {
  let component: CheckboxcmpComponent;
  let fixture: ComponentFixture<CheckboxcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

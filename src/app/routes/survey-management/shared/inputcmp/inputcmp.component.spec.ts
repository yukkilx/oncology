import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcmpComponent } from './inputcmp.component';

describe('InputcmpComponent', () => {
  let component: InputcmpComponent;
  let fixture: ComponentFixture<InputcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

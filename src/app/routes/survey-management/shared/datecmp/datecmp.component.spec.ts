import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecmpComponent } from './datecmp.component';

describe('DatecmpComponent', () => {
  let component: DatecmpComponent;
  let fixture: ComponentFixture<DatecmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatecmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiocmpComponent } from './radiocmp.component';

describe('RadiocmpComponent', () => {
  let component: RadiocmpComponent;
  let fixture: ComponentFixture<RadiocmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiocmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiocmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

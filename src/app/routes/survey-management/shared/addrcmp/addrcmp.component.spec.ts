import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrcmpComponent } from './addrcmp.component';

describe('AddrcmpComponent', () => {
  let component: AddrcmpComponent;
  let fixture: ComponentFixture<AddrcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

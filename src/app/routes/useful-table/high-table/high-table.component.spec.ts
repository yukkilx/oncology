import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighTableComponent } from './high-table.component';

describe('HighTableComponent', () => {
  let component: HighTableComponent;
  let fixture: ComponentFixture<HighTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

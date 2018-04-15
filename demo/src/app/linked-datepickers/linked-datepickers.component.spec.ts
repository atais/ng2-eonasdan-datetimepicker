import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedDatepickersComponent } from './linked-datepickers.component';

describe('LinkedDatepickersComponent', () => {
  let component: LinkedDatepickersComponent;
  let fixture: ComponentFixture<LinkedDatepickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedDatepickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedDatepickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

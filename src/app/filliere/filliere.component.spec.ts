import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilliereComponent } from './filliere.component';

describe('FilliereComponent', () => {
  let component: FilliereComponent;
  let fixture: ComponentFixture<FilliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

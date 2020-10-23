import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleadminComponent } from './moduleadmin.component';

describe('ModuleadminComponent', () => {
  let component: ModuleadminComponent;
  let fixture: ComponentFixture<ModuleadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

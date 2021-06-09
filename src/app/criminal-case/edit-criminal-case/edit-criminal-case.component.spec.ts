import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCriminalCaseComponent } from './edit-criminal-case.component';

describe('EditCriminalCaseComponent', () => {
  let component: EditCriminalCaseComponent;
  let fixture: ComponentFixture<EditCriminalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCriminalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCriminalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

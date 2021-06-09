import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCriminalCaseComponent } from './add-criminal-case.component';

describe('AddCriminalCaseComponent', () => {
  let component: AddCriminalCaseComponent;
  let fixture: ComponentFixture<AddCriminalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCriminalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCriminalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

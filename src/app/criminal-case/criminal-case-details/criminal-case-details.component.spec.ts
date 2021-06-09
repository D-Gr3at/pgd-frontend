import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalCaseDetailsComponent } from './criminal-case-details.component';

describe('CriminalCaseDetailsComponent', () => {
  let component: CriminalCaseDetailsComponent;
  let fixture: ComponentFixture<CriminalCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalCaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

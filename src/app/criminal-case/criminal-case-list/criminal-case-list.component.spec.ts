import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalCaseListComponent } from './criminal-case-list.component';

describe('CriminalCaseListComponent', () => {
  let component: CriminalCaseListComponent;
  let fixture: ComponentFixture<CriminalCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

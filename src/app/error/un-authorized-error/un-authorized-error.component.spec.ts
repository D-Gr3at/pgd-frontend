import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthorizedErrorComponent } from './un-authorized-error.component';

describe('UnAuthorizedErrorComponent', () => {
  let component: UnAuthorizedErrorComponent;
  let fixture: ComponentFixture<UnAuthorizedErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnAuthorizedErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAuthorizedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

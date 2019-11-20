import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerRequestDetailsComponent } from './cleaner-request-details.component';

describe('CleanerRequestDetailsComponent', () => {
  let component: CleanerRequestDetailsComponent;
  let fixture: ComponentFixture<CleanerRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

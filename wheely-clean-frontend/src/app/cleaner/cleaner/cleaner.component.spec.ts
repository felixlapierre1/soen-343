import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerComponent } from './cleaner.component';

describe('CleanerComponent', () => {
  let component: CleanerComponent;
  let fixture: ComponentFixture<CleanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWashDialogComponent } from './assign-wash-dialog.component';

describe('AssignWashDialogComponent', () => {
  let component: AssignWashDialogComponent;
  let fixture: ComponentFixture<AssignWashDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignWashDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignWashDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

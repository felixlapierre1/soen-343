import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListItemComponent } from './admin-list-item.component';

describe('AdminListItemComponent', () => {
  let component: AdminListItemComponent;
  let fixture: ComponentFixture<AdminListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

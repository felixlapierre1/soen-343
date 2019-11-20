import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWashDetailsComponent } from './customer-wash-details.component';

describe('CustomerWashDetailsComponent', () => {
  let component: CustomerWashDetailsComponent;
  let fixture: ComponentFixture<CustomerWashDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerWashDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { TestBed } from '@angular/core/testing';

import { AdminHttpClientService } from './admin-http-client.service';

describe('AdminHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminHttpClientService = TestBed.get(AdminHttpClientService);
    expect(service).toBeTruthy();
  });
});

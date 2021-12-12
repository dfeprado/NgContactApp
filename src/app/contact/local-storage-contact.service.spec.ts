import { TestBed } from '@angular/core/testing';

import { LocalStorageContactService } from './local-storage-contact.service';

describe('LocalStorageContactService', () => {
  let service: LocalStorageContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

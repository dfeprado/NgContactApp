import { TestBed } from '@angular/core/testing';

import { MemoryContactService } from './memory-contact.service';

describe('MemoryContactService', () => {
  let service: MemoryContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

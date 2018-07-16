import { TestBed, inject } from '@angular/core/testing';

import { AllItemsService } from './all-items.service';

describe('AllItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllItemsService]
    });
  });

  it('should be created', inject([AllItemsService], (service: AllItemsService) => {
    expect(service).toBeTruthy();
  }));
});

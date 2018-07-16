import { TestBed, inject } from '@angular/core/testing';

import { GameClockService } from './game-clock.service';

describe('GameClockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameClockService]
    });
  });

  it('should be created', inject([GameClockService], (service: GameClockService) => {
    expect(service).toBeTruthy();
  }));
});

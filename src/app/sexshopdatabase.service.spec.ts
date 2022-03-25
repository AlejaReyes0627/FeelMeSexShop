import { TestBed } from '@angular/core/testing';

import { SexshopdatabaseService } from './sexshopdatabase.service';

describe('SexshopdatabaseService', () => {
  let service: SexshopdatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SexshopdatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

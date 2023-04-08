import { TestBed } from '@angular/core/testing';

import { FormComponentService } from './form-service.service';

describe('FormComponentService', () => {
  let service: FormComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed,  inject } from '@angular/core/testing';
import { UnassignService } from './Unassign.service';

describe('Service: Unassign', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnassignService]
    });
  });

  it('should ...', inject([UnassignService], (service: UnassignService) => {
    expect(service).toBeTruthy();
  }));
});

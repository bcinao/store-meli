import { TestBed } from '@angular/core/testing';

import { GetItemResolver } from './get-item.resolver';

describe('GetItemResolver', () => {
  let resolver: GetItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

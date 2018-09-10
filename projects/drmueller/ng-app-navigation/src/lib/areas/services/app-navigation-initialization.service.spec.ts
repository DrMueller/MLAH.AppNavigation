import { TestBed, inject } from '@angular/core/testing';

import { AppNavigationInitializationService } from './app-navigation-initialization.service';

describe('AppNavigationInitializationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppNavigationInitializationService]
    });
  });

  it('should be created', inject([AppNavigationInitializationService], (service: AppNavigationInitializationService) => {
    expect(service).toBeTruthy();
  }));
});

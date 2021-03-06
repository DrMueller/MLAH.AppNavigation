import { Injectable } from '@angular/core';
import { AppNavigationConfiguration } from '../models/app-navigation-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationInitializationService {
  private _config: AppNavigationConfiguration;

  public get config(): AppNavigationConfiguration {
    return this._config;
  }

  public initialize(config: AppNavigationConfiguration): void {
    this._config = config;
  }
}

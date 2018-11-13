import { Component } from '@angular/core';

import {
  AppNavigationConfiguration
} from 'projects/drmueller/ng-app-navigation/src/lib/areas/models/app-navigation-configuration.model';
import {
  AppNavigationEntry
} from 'projects/drmueller/ng-app-navigation/src/lib/areas/models/app-navigation-entry.model';
import {
  AppNavigationInitializationService
} from 'projects/drmueller/ng-app-navigation/src/lib/areas/services/app-navigation-initialization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(appNavigationInitalizationSerice: AppNavigationInitializationService) {
    appNavigationInitalizationSerice.initialize(new AppNavigationConfiguration(
      'Hello test',
      this.createSomeEntries()));
  }

  private createSomeEntries(): AppNavigationEntry[] {
    return [
      new AppNavigationEntry('Home', '/home', true),
      new AppNavigationEntry('Individuals', '/individuals', true)
    ];
  }
}

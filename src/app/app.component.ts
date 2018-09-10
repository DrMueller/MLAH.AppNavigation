import { Component } from '@angular/core';
import { AppNavigationInitializationService } from 'projects/drmueller/ng-app-navigation/src/lib/areas/services';
import { AppNavigationEntry, AppNavigationConfiguration } from 'projects/drmueller/ng-app-navigation/src/lib/areas/models';

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

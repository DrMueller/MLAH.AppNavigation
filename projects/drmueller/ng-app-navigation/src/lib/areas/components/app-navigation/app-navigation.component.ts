import { Component, OnInit } from '@angular/core';

import { AppNavigationConfiguration } from '../../models/app-navigation-configuration.model';
import { AppNavigationEntry } from '../../models/app-navigation-entry.model';
import { AppNavigationInitializationService } from '../../services/app-navigation-initialization.service';

import { AnimationServant } from './animations';

@Component({
  selector: 'drm-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss'],
  animations: AnimationServant.getAnimations()
})

export class AppNavigationComponent implements OnInit {
  public isSidebarOpen = false;
  private config: AppNavigationConfiguration;

  public constructor(
    private appInitService: AppNavigationInitializationService) {
  }

  public get appDescription(): string {
    return this.config.appDescription;
  }

  public get appNavigationEntries(): AppNavigationEntry[] {
    return this.config.appNavigationEntries;
  }

  public ngOnInit(): void {
    this.config = this.appInitService.config;
  }

  public sidebarOpenChanged(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }
}

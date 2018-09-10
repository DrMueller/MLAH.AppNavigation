import { AppNavigationEntry } from './app-navigation-entry.model';

export class AppNavigationConfiguration {
  constructor(public readonly appDescription: string, public appNavigationEntries: AppNavigationEntry[]) {
  }
}

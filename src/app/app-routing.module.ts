import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'src/app/areas/home/home.module#HomeModule'
  },
  {
    path: 'individuals',
    loadChildren: 'src/app/areas/individuals/individuals.module#IndividualsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {
}

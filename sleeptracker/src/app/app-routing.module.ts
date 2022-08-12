import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sleep-logger',
    loadChildren: () => import('./sleep-logger/sleep-logger.module').then( m => m.SleepLoggerPageModule)
  },  {
    path: 'sleepiness-logger',
    loadChildren: () => import('./sleepiness-logger/sleepiness-logger.module').then( m => m.SleepinessLoggerPageModule)
  },
  {
    path: 'sleep-data',
    loadChildren: () => import('./sleep-data/sleep-data.module').then( m => m.SleepDataPageModule)
  },
  {
    path: 'past-sleep',
    loadChildren: () => import('./past-sleep/past-sleep.module').then( m => m.PastSleepPageModule)
  },
  {
    path: 'past-sleepiness',
    loadChildren: () => import('./past-sleepiness/past-sleepiness.module').then( m => m.PastSleepinessPageModule)
  },
  {
    path: 'current-sleepiness',
    loadChildren: () => import('./current-sleepiness/current-sleepiness.module').then( m => m.CurrentSleepinessPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

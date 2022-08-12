import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentSleepinessPage } from './current-sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentSleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentSleepinessPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BeatselectorComponent } from './components/beatselector/beatselector.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [

  {
    path: 'imprint',
    component: ImprintComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: ':beat',
    component: BeatselectorComponent
  },
  {
    path: '**',
    component: BeatselectorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

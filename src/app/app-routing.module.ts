import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ShowcaseTrackComponent } from './components/showcase-track/showcase-track.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: '',
        component: GreeterComponent,
      },
      {
        path: 'track/:beat',
        component: ShowcaseTrackComponent,
      }
    ]
  },
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
    path: '**',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

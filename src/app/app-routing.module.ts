import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ShowcaseTrackComponent } from './components/showcase-track/showcase-track.component';
import { HomeComponent } from './components/home/home.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { GreeterComponent } from './components/greeter/greeter.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: '',
        component: GreeterComponent
      },
      {
        path: 'music/:beat',
        component: ShowcaseTrackComponent,
      }
    ]
  },
  {
    path: 'info',
    component: InfoPageComponent,
    children: [
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

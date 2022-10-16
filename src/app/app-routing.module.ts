import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: ':beat',
    component: HeaderComponent
  },
  {
    path: '**',
    component: HeaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

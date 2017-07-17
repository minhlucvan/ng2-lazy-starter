import { CustomPreloader } from './custom.preloader';
import { PageNotFoundComponent } from './../shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/containers/login/login.module#LoginModule',
    data: {
      preload: true
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: CustomPreloader })],
  exports: [RouterModule],
  providers: [CustomPreloader]
})
export class AppRoutingModule { }

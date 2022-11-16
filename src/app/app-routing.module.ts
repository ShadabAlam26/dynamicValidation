import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveLoginFormComponent } from './reactive-login-form/reactive-login-form.component';
const routes: Routes = [
  {
    path:'',
    component: ReactiveLoginFormComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

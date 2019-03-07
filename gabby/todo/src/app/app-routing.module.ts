import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'login'},
  {path : 'login', component: LoginComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

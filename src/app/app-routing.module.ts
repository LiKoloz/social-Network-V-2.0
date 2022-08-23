import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {LoginGuard} from "./guards/login.guard";

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'entered',
    canActivate: [LoginGuard],
    canDeactivate: [LoginGuard],
    loadChildren: () => import('./components/entered/entered.module').then((m) => m.EnteredModule)
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

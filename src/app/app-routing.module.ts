import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

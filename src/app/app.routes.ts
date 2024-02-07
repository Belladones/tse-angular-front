import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { LoansComponent } from './loans/loans.component';
import { FormComponent } from './form/form.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {PeoplesComponent} from "./peoples/peoples.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    FormComponent,
    HttpClientModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

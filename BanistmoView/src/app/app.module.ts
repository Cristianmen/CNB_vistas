import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuOperadorComponent } from './menu-operador/menu-operador.component';
import { ErrorComponent } from './error/error.component';
import { ContactoComponent } from './contacto/contacto.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Administrador', component: MenuAdminComponent },
  { path: 'Operario', component: MenuOperadorComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Error', component: ErrorComponent },
  { path: 'Contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'Login', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuAdminComponent,
    MenuOperadorComponent,
    ErrorComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TiposComponent } from './tipos/tipos.component';
import { TiposFormComponent } from './tipos-form/tipos-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcaFormComponent } from './marca-form/marca-form.component';
const routes: Routes = [
  { path: '', component: MarcasComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'marcas/insertar', component: MarcaFormComponent },
  { path: 'marcas/insertar/:id', component: MarcaFormComponent },
  { path: 'tipos', component: TiposComponent },
  { path: 'tipos/insertar', component: TiposFormComponent },
  { path: 'tipos/insertar/:id', component: TiposFormComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    TiposComponent,
    TiposFormComponent,
    MarcasComponent,
    MarcaFormComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

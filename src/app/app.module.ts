import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';
import { BebidasComponent } from './componentes/bebidas/bebidas.component';
import { ComidaComponent } from './componentes/comida/comida.component';
import { HomeComponent } from './componentes/home/home.component';
import { SelectComponent } from './componentes/select/select.component';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './componentes/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TecnologiaComponent,
    BebidasComponent,
    ComidaComponent,
    HomeComponent,
    SelectComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './componentes/bebidas/bebidas.component';
import { ComidaComponent } from './componentes/comida/comida.component';
import { HomeComponent } from './componentes/home/home.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "categorias", component: ComidaComponent},
  {path: "comida", component: ComidaComponent},
  {path: "bebidas", component: BebidasComponent},
  {path: "tecnologia", component: TecnologiaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

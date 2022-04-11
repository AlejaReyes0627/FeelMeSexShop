import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosOfertaComponent } from './components/productosOferta/productosOferta.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';

const routes: Routes = [{path: '', component:MenuComponent}, {path:'productos', component:ProductosComponent}, {path:'inicio', component:MenuComponent}, {path:'produtosOferta', component:ProductosOfertaComponent}, {path:'footer', component: FooterComponent}, {path:'preguntasFrecuentes', component: PreguntasFrecuentesComponent} ];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosOfertaComponent } from './components/productosOferta/productosOferta.component';

const routes: Routes = [{path: '', component:MenuComponent}, {path:'productos', component:ProductosComponent}, {path:'inicio', component:MenuComponent}, {path:'produtosOferta', component:ProductosOfertaComponent} ];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


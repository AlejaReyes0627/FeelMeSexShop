import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosOfertaComponent } from './components/productosOferta/productosOferta.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { EnviosComponent } from './components/envios/envios.component';
import { DevolucionesComponent } from './components/devoluciones/devoluciones.component';
import { ConfidencialidadComponent } from './components/confidencialidad/confidencialidad.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { PreciosAsequiblesComponent } from './components/precios-asequibles/precios-asequibles.component';
import { AtencionOportunaComponent } from './components/atencion-oportuna/atencion-oportuna.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'inicio', component: MenuComponent },
  { path: 'produtosOferta', component: ProductosOfertaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'envios', component: EnviosComponent },
  { path: 'devoluciones', component: DevolucionesComponent},
  { path: 'confidencialidad', component: ConfidencialidadComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'quienesSomos', component: QuienesSomosComponent},
  { path: 'preciosAsequibles', component: PreciosAsequiblesComponent},
  { path: 'atencionOportuna', component: AtencionOportunaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
import { AtencionOportunaComponent } from './components/timely-care/atencion-oportuna.component';

import { RegistroPersonaComponent } from './components/registro-persona/registro-persona.component';
import { LoginComponent } from './components/login/login.component';
import { EntryPageComponent } from './components/entry-page/entry-page.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RememberPasswordComponent } from './components/remember-password/remember-password.component';
import { SeccionPagoComponent } from './components/seccion-pago/seccion-pago.component';
import { FiltroMujeresComponent } from './components/productos/filtro-mujeres/filtro-mujeres.component';
import { FiltroHombresComponent } from './components/productos/filtro-hombres/filtro-hombres.component';
import { FiltroParejasComponent } from './components/productos/filtro-parejas/filtro-parejas.component';
import { FiltroUnisexComponent } from './components/productos/filtro-unisex/filtro-unisex.component';
import { FiltroVibradoresComponent } from './components/productos/filtro-vibradores/filtro-vibradores.component';
import { FiltroJuegosComponent } from './components/productos/filtro-juegos/filtro-juegos.component';
import { FiltroLenceriaComponent } from './components/productos/filtro-lenceria/filtro-lenceria.component';
import { FiltroLubricantesComponent } from './components/productos/filtro-lubricantes/filtro-lubricantes.component';
import { FiltroOtrosComponent } from './components/productos/filtro-otros/filtro-otros.component';

const routes: Routes = [
  { path: '', component: EntryPageComponent },
  { path: 'inicio', component: MenuComponent },
  { path: 'entrada', component: EntryPageComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/filtroMujeres', component: FiltroMujeresComponent },
  { path: 'productos/filtroHombres', component: FiltroHombresComponent },
  { path: 'productos/filtroParejas', component: FiltroParejasComponent },
  { path: 'productos/filtroUnisex', component: FiltroUnisexComponent },
  { path: 'productos/filtroVibradores', component: FiltroVibradoresComponent },
  { path: 'productos/filtroJuegos', component: FiltroJuegosComponent },
  { path: 'productos/filtroLenceria', component: FiltroLenceriaComponent },
  { path: 'productos/filtroLubricantes', component: FiltroLubricantesComponent },
  { path: 'productos/filtroOtros', component: FiltroOtrosComponent },
  { path: 'produtosOferta', component: ProductosOfertaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'envios', component: EnviosComponent },
  { path: 'devoluciones', component: DevolucionesComponent },
  { path: 'confidencialidad', component: ConfidencialidadComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'preciosAsequibles', component: PreciosAsequiblesComponent },
  { path: 'atencionOportuna', component: AtencionOportunaComponent },
  { path: 'registro-persona', component: RegistroPersonaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'rememberPassword', component: RememberPasswordComponent },
  { path: 'pago', component: SeccionPagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

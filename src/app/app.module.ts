import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    NavbarComponent,
    ProductosOfertaComponent,
    FooterComponent,
    PreguntasFrecuentesComponent,
    EnviosComponent,
    DevolucionesComponent,
    ConfidencialidadComponent,
    ContactoComponent,
    QuienesSomosComponent,
    PreciosAsequiblesComponent,
    AtencionOportunaComponent,
    RegistroPersonaComponent,
    LoginComponent,
    EntryPageComponent,
    PerfilComponent,
    RememberPasswordComponent,
    SeccionPagoComponent,
    FiltroMujeresComponent,
    FiltroHombresComponent,
    FiltroParejasComponent,
    FiltroUnisexComponent,
    FiltroVibradoresComponent,
    FiltroJuegosComponent,
    FiltroLenceriaComponent,
    FiltroLubricantesComponent,
    FiltroOtrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import  {environment}  from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosOfertaComponent } from './components/productosOferta/productosOferta.component';
import { ProductosTopComponent } from './components/productosTop/productosTop.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { EnviosComponent } from './components/envios/envios.component';
import { DevolucionesComponent } from './components/devoluciones/devoluciones.component';
import { ConfidencialidadComponent } from './components/confidencialidad/confidencialidad.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { PreciosAsequiblesComponent } from './components/precios-asequibles/precios-asequibles.component';
import { AtencionOportunaComponent } from './components/atencion-oportuna/atencion-oportuna.component';
<<<<<<< HEAD
import { RegistroPersonaComponent } from './components/registro-persona/registro-persona.component';
=======
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { EntryPageComponent } from './components/entry-page/entry-page.component';
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 64a126aefd605486e68eedc42298d3793ce513ee
>>>>>>> 1c716662b76ff1690b07d25deee0667dbc2498c7

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    NavbarComponent,
    ProductosOfertaComponent,
    ProductosTopComponent,
    FooterComponent,
    PreguntasFrecuentesComponent,
    EnviosComponent,
    DevolucionesComponent,
    ConfidencialidadComponent,
    ContactoComponent,
    QuienesSomosComponent,
    PreciosAsequiblesComponent,
    AtencionOportunaComponent,
<<<<<<< HEAD
    RegistroPersonaComponent,
=======
    LoginComponent,
<<<<<<< HEAD
    EntryPageComponent,
=======
>>>>>>> 64a126aefd605486e68eedc42298d3793ce513ee
>>>>>>> 1c716662b76ff1690b07d25deee0667dbc2498c7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

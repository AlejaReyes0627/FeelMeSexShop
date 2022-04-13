import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

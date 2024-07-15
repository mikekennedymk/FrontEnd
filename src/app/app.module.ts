import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AppComponent } from './app.component'; // Importe o AppComponent aqui
import { PokemonsComponent } from './components/pokemons/pokemons.component'; // Importe o PokemonsComponent aqui
import { PokemonService } from './services/pokemons.service';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
@NgModule({
  declarations: [
    UsuariosComponent,
    PokemonsComponent,
    PokemonDetailsComponent
    // outros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [UsuariosService, PokemonService],
  bootstrap: []
})
export class AppModule {
  
  constructor(private appRef: ApplicationRef) {}
  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent); // Inicializando manualmente o componente
  }

 }


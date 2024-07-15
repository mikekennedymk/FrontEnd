import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' }, // Redireciona para '/usuarios' ao acessar '/'
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemons/pokemon-details/:name', component: PokemonDetailsComponent },


  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Exportando as rotas para que possam ser importadas em outros arquivos, como app.config.ts
export { routes };
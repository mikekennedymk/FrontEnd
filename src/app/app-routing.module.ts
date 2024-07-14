import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' }, // Redireciona para '/usuarios' ao acessar '/'
  { path: 'usuarios', component: UsuariosComponent },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Exportando as rotas para que possam ser importadas em outros arquivos, como app.config.ts
export { routes };
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PoliticaComponent } from './politica/politica.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { ListagemDeUsuariosComponent } from './listagem-de-usuarios/listagem-de-usuarios.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { EditarComponent } from './editar/editar.component';
import { EditarSenhaComponent } from './editar-senha/editar-senha.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'usuarios', component: ListagemDeUsuariosComponent },
  { path: 'doacao/:id', component: DoacaoComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'redefinir', component: EditarSenhaComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
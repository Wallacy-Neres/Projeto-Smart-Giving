import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../models/Postagem';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key: string = 'data';
  reverse: boolean = true;

  listaPostagens: Postagem[];

  postagem: Postagem = new Postagem
  usuario: Usuario = new Usuario;

  constructor(private postagemService: PostagemService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.findAllPostagens()

    this.usuarioService.obterPorId(parseInt(localStorage.getItem('Identify'))).subscribe((resp: Usuario) => {
      this.usuario = resp
    })

    if (localStorage.getItem('Token') == null) {
      location.assign('/notFound');
    }

    let post: string = localStorage.getItem('excluido');

    if (post == "true") {
      alert('Postagem excluida com sucesso')
      localStorage.removeItem('excluido');
    }
    window.scroll(0, 0);

  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagem.usuario = this.usuario;
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      location.assign('/feed')
    });
  }

  btnSim() {
    this.postagemService.deletePostagem(this.postagem.codigo).subscribe(() => {
      location.assign('/feed');
      localStorage.setItem('excluido', 'true')
    })
  }

}

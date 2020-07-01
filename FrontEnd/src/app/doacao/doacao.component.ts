import { Component, OnInit } from '@angular/core';
import { DoacaoService } from '../services/doacao.service';
import { Doacao } from '../models/doacao';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  doacao: Doacao = new Doacao;
  usuario: Usuario = new Usuario;
  doacoes: Doacao[] = [];
  key: string = 'data';
  reverse: boolean = true;

  constructor(private doacaoService: DoacaoService, private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    let idDoUsuario = this.route.snapshot.params['id'];
    this.obterUsuarioPorId(idDoUsuario);
    this.obterDoacoes(idDoUsuario);
  }

  obterUsuarioPorId(id: number) {
    this.usuarioService.obterPorId(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  obterDoacoes(idDoUsuario: number) {
    this.doacaoService.obterPorUsuario(idDoUsuario).subscribe((resp: Doacao[]) => {
      this.doacoes = resp;
    });
  }

  doar() {
    this.doacao.usuario = this.usuario;
    this.doacao.codigo = Math.random().toString(36).substr(2, 9) + Math.floor(Math.random() * 10);

    this.doacaoService.cadastrarDoacao(this.doacao)
      .subscribe((resp: Doacao) => {
        alert("Agora falta pouco...\nApresente o código abaixo no local de doação escolhido!\n\n" + this.doacao.codigo + "\n\nAgradecemos desde já!");
        this.doacao = resp;
        this.router.navigate(['/feed'])
      })
  }
}

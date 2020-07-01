import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Endereco } from '../models/endereco';
import { Doacao } from '../models/doacao';
import { EnderecoService } from '../services/endereco.service';
import { DoacaoService } from '../services/doacao.service';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario = new Usuario;
  enderecos: Endereco[];
  endereco: Endereco = new Endereco;
  enderecoEdit: Endereco = new Endereco;
  doacoes: Doacao[];
  tab: String = "Usuarios";
  delOk: String = 'false';
  delFail: String = 'false';
  delOkMessage: String;

  constructor(private usuarioService: UsuarioService, private enderecoService: EnderecoService, private doacaoService: DoacaoService) { }

  ngOnInit(): void {
    this.obterTodosOsUsuarios();
    this.obterTodosOsEnderecos();
    this.obterTodosAsDoacoes();
    this.endereco.usuario = new Usuario;
    window.scroll(0, 0);
  }

  acaoSucesso(texto: String, acao: String) {
    if (acao == "falha") {
      this.delFail = localStorage.getItem('delFail');
      this.delOkMessage = acao + " " + texto;
      localStorage.removeItem('delFail');
    } else {
      this.delOk = localStorage.getItem('delOk');
      this.delOkMessage = texto + " " + acao + " com sucesso!";
      localStorage.removeItem('delOk');
    }
  }

  obterTodosOsUsuarios() {
    this.usuarioService.obterTodos().subscribe((resp: Usuario[]) => {
      this.usuarios = resp
    });
  }

  obterTodosOsEnderecos() {
    this.enderecoService.obterTodos().subscribe((resp: Endereco[]) => {
      this.enderecos = resp;
    })
  }

  obterTodosAsDoacoes() {
    this.doacaoService.obterTodos().subscribe((resp: Doacao[]) => {
      this.doacoes = resp;
    })
  }

  btnUsuario(user: Usuario) {
    this.usuario = user;
  }

  btnEndereco(endereco: Endereco) {
    this.enderecoEdit = endereco;
  }

  btnDel(user: Usuario) {
    this.usuario = user;
  }

  btnSimUsuario() {
    this.usuarioService.deletarUsuario(this.usuario.codigo).subscribe(() => {
      localStorage.setItem('delOk', 'true');
      this.acaoSucesso('Usuário', 'deletado');
      setTimeout(() => {
        location.assign('/usuarios')
      }
        , 2000)
    })
  }

  btnSimEndereco() {
    this.enderecoService.deletarEndereco(this.enderecoEdit.codigo).subscribe(() => {
      localStorage.setItem('delOk', 'true');
      this.acaoSucesso('Endereço', 'deletado');
      setTimeout(() => {
        location.assign('/usuarios')
      }
        , 2000)
    })
  }

  btnNovoEndereco() {
    let id = parseInt((<HTMLSelectElement>document.getElementById("idUsuarioEndereco")).value)

    this.usuarioService.obterPorId(id).subscribe((resp: Usuario) => {
      this.endereco.parceiro = resp.nome;
      this.endereco.usuario.codigo = resp.codigo;
    }, err => {
      localStorage.setItem('delFail', 'true');
      this.acaoSucesso('cadastrar endereço', 'Falha');
    })

    setTimeout(() => {
      this.enderecoService.cadastrarEndereco(this.endereco).subscribe((resp: Endereco) => {
        this.endereco = resp;
        localStorage.setItem('delOk', 'true');
        this.acaoSucesso('Endereço', 'cadastrado');
        setTimeout(() => {
          location.assign('/usuarios')
        }
          , 2000)
      })
      this.endereco = new Endereco;
    }, 2000);
  }

  btnAtualizarEndereco() {

    let id = parseInt((<HTMLSelectElement>document.getElementById("inputGroupSelect03")).value)

    this.usuarioService.obterPorId(id).subscribe((resp: Usuario) => {
      this.enderecoEdit.parceiro = resp.nome;
      this.enderecoEdit.usuario.codigo = resp.codigo;
    })

    setTimeout(() => {
      this.enderecoService.attDadosEndereco(this.enderecoEdit).subscribe((resp: Endereco) => {
        this.enderecoEdit = resp;
        localStorage.setItem('delOk', 'true');
        this.acaoSucesso('Endereço', 'atualizado');
        setTimeout(() => {
          location.assign('/usuarios')
        }
          , 2000);
      })
    }, 2000)
  }

  esconderSenha(senha) {
    return '******';
  }

  mudarTab(texto: String) {
    this.tab = texto;
  }
}
import { Component, OnInit } from '@angular/core';
import { faBars, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { UsuarioLogin } from '../models/usuarioLogin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: Usuario = new Usuario;
  usuarioLogin: UsuarioLogin = new UsuarioLogin;
  delOk: string;
  delFail: string;
  delOkMessage: string;
  loginOk: string;

  faBars = faBars;
  faUser = faUser;
  faUserPlus = faUserPlus;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

  }

  cadastrar() {
    let nome: string = (<HTMLSelectElement>document.getElementById('nomeRegister')).value;
    let email: string = (<HTMLSelectElement>document.getElementById('emailRegister')).value;
    let senha: string = (<HTMLSelectElement>document.getElementById('senhaRegister')).value;
    let confirmaSenha: string = (<HTMLSelectElement>document.getElementById('confirmaSenhaRegister')).value;

    if (this.validar(nome, email, senha, confirmaSenha)) {
      this.subir();
    } else {
      event.preventDefault();
    }
  }

  validar(nome: string, email: string, senha: string, confirmaSenha: string) {
    document.getElementById('alert-nome').style.visibility = "hidden";
    document.getElementById('alert-email').style.visibility = "hidden";
    document.getElementById('alert-senha').style.visibility = "hidden";
    document.getElementById('alert-confirmaSenha').style.visibility = "hidden";

    let contador = 0;

    if (nome.length < 3) {
      document.getElementById('alert-nome').innerHTML = "Nome Inválido";
      document.getElementById('alert-nome').style.visibility = "visible";
      contador++;
    } else {
      document.getElementById('nomeRegister').style.border = "1px solid #0000CD"
    }

    let auxEmail = email.split(" ");
    let antesArroba = email.substring(0, email.indexOf('@'));
    let depoisArroba = email.substring(email.indexOf('@') + 1, email.length);

    if (auxEmail.length > 1) {
      document.getElementById('alert-email').innerHTML = "Existe espaço entre o email";
      document.getElementById('alert-email').style.visibility = "visible";
      contador++;
    } else if (antesArroba.length < 3 || antesArroba.indexOf('@') != -1) {
      document.getElementById('alert-email').innerHTML = "Email inválido";
      document.getElementById('alert-email').style.visibility = "visible";
      contador++;
    } else if (depoisArroba.length < 5 || depoisArroba.indexOf('@') != -1) {
      document.getElementById('alert-email').innerHTML = "Email Inválido";
      document.getElementById('alert-email').style.visibility = "visible";
      contador++;
    } else {
      document.getElementById("emailRegister").style.border = "1px solid #ced4da";
    }

    if (senha.length < 6) {
      document.getElementById('alert-senha').innerHTML = "Senha Fraca";
      document.getElementById('alert-senha').style.visibility = "visible";
      contador++;
    } else if (senha.length > 12) {
      document.getElementById('alert-senha').innerHTML = "Senha maior que o limite";
      document.getElementById('alert-senha').style.visibility = "visible";
      contador++;
    }
    {
      document.getElementById("senhaRegister").style.border = "1px solid #ced4da";
    }

    if (confirmaSenha !== senha) {
      document.getElementById('alert-confirmaSenha').innerHTML = "Senha digitada é diferente da anterior";
      document.getElementById('alert-confirmaSenha').style.visibility = "visible";
      contador++;
    } else {
      document.getElementById('confirmaSenhaRegister').style.border = "1px solid #ced4da";
    }

    if (contador > 0) {
      return false;
    } else {
      return true;
    }
  }

  subir() {
    this.delOk = "false";
    this.delFail = "false";
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      localStorage.setItem('delOk', 'true');
      this.acaoSucesso('Dados', 'enviados');
      setTimeout(() => {
        location.assign('/home')
      }
        , 2000)
    }, err => {
      localStorage.setItem('delFail', 'true');
      this.acaoFalha('cadastro');
    })
  }

  login() {
    this.delOk = "false";
    this.delFail = "false";
    this.usuarioService.loginUsuario(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      alert('Bem vindo ' + resp.nome);
      localStorage.setItem('Token', resp.token);
      localStorage.setItem('Identify', resp.codigo.toString());
      localStorage.setItem('Perfil', resp.perfil);
      location.assign('/feed');
    }, err => {
      localStorage.setItem('delFail', 'true');
      this.acaoFalha('login');
    })
  }

  logout() {
    localStorage.clear();
    location.assign('/home');
  }

  session() {
    let on = false;
    let token = localStorage.getItem('Token');
    if (token != null) {
      on = true;
    }
    return on;
  }

  perfil() {
    let adm = false;
    let perfil = localStorage.getItem('Perfil');

    if (this.session()) {
      if (perfil == "adm") {
        adm = true;
      }
    }
    return adm;
  }

  acaoSucesso(texto: String, acao: String) {
    this.delOk = localStorage.getItem('delOk');
    this.delOkMessage = texto + " " + acao + " com sucesso!";
    localStorage.removeItem('delOk');
  }

  acaoFalha(acao: String) {
    switch (acao) {
      case "login":
        this.delFail = localStorage.getItem('delFail');
        this.delOkMessage = "Usuário não encontrado, tente novamente ou faça o cadastro.";
        localStorage.removeItem('delFail');
        break;
      case "cadastro":
        this.delFail = localStorage.getItem('delFail');
        this.delOkMessage = "E-mail já cadastrado, informe outro.";
        localStorage.removeItem('delFail');
        break;
      default:
        alert("Passei Aqui!")
        break;
    }
  }
}
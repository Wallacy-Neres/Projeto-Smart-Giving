import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { UsuarioLogin } from '../models/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  enderecoDoServidor = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  obterPorId(id: number) {
    return this.http.get(this.enderecoDoServidor + '/' + id, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  loginUsuario(usuarioLogin: UsuarioLogin) {
    return this.http.post(this.enderecoDoServidor + '/logar', usuarioLogin);
  }

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post(this.enderecoDoServidor + '/cadastrar', usuario);
  }

  attDadosUsuario(usuario: Usuario) {
    return this.http.put(this.enderecoDoServidor, usuario, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  attSenha(usuario: Usuario) {
    return this.http.put(this.enderecoDoServidor + '/redefinir', usuario)
  }

  deletarUsuario(id: number) {
    return this.http.delete(this.enderecoDoServidor + '/' + id, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    })
  }

  redefinirSenha(email: string) {
    return this.http.post(this.enderecoDoServidor + '/redefinir', email)
  }
}
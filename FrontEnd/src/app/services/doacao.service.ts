import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doacao } from '../models/doacao';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  enderecoDoServidor = 'http://localhost:8080/desconto';

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  cadastrarDoacao(doacao: Doacao) {
    return this.http.post(this.enderecoDoServidor, doacao, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  attDadosDoacao(doacao: Doacao) {
    return this.http.put(this.enderecoDoServidor, doacao, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  obterPorUsuario(idDoUsuario: number) {
    return this.http.get(this.enderecoDoServidor + '/Usuario/' + idDoUsuario, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }
}

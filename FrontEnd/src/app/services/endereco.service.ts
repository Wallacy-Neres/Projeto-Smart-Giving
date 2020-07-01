import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  enderecoDoServidor = 'http://localhost:8080/endereco';

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  cadastrarEndereco(endereco: Endereco) {
    return this.http.post(this.enderecoDoServidor, endereco, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  attDadosEndereco(endereco: Endereco) {
    return this.http.put(this.enderecoDoServidor, endereco, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    });
  }

  deletarEndereco(id: number) {
    return this.http.delete(this.enderecoDoServidor + '/' + id, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})

export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens() {
    return this.http.get('http://localhost:8080/feed', {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    })
  }

  getByIdPostagem(id: number) {
    return this.http.get('http://localhost:8080/feed/' + id, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    })
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/feed', postagem, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    })
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/feed', postagem, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    })
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/feed/${id}`, {
      headers: {
        'authorization': localStorage.getItem('Token'),
      }
    })
  }
}
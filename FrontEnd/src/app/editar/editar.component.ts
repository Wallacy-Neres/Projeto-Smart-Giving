import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../models/Postagem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  postagem: Postagem = new Postagem

  constructor(private postagemService: PostagemService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    var id = this.route.snapshot.params['id']
    this.findById(id);
    console.log(this.postagem);

    let post: string = localStorage.getItem('excluido');

    if (post == "true") {
      alert('Postagem excluida com sucesso')
      localStorage.removeItem('excluido');
    }
    window.scroll(0, 0);

  }

  findById(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    })
  }

  salvar() {
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.router.navigate(['/feed'])
      location.assign('/feed')
    })
  }

  btnExcluir(postagem: Postagem) {
    this.postagem = postagem;
  }

  btnSim() {
    this.postagemService.deletePostagem(this.postagem.codigo).subscribe(() => {
      location.assign('/feed');
      localStorage.setItem('excluido', 'true')
    })
  }

}

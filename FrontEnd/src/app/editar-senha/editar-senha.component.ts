import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-senha',
  templateUrl: './editar-senha.component.html',
  styleUrls: ['./editar-senha.component.css']
})
export class EditarSenhaComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private route: Router) { }

  ngOnInit(): void {
  }

  editarSenha() {
    this.usuarioService.redefinirSenha(this.usuario.email).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.usuario.senha = Math.random().toString(36).substr(2, 9) + Math.floor(Math.random() * 10);
      this.usuarioService.attSenha(this.usuario).subscribe((resp: Usuario) => {
        alert('Nova senha encaminhado ao e-mail cadastrado.');
        location.assign('/home');
      })
    }, err => {
      alert('Usuario não existe')
    })
  }

}

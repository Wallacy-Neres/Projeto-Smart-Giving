import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  usuario: Usuario = new Usuario;
  choose: boolean = false;

  constructor(private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.obterUsuarioPorId(this.route.snapshot.params['id']);
    localStorage.setItem('escolha', String(this.choose));
    this.editar();
  }

  obterUsuarioPorId(id: number) {
    this.usuarioService.obterPorId(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  editar() {
    let propFieldset1 = <HTMLFieldSetElement>document.getElementById("dP1")
    let propFieldset2 = <HTMLFieldSetElement>document.getElementById("dP2");
    let propEdit = <HTMLInputElement>document.getElementById("save");
    let choose = localStorage.getItem('escolha');
    let showPassword = <HTMLInputElement>document.getElementById("senhaPerfil");
    let showPassword2 = <HTMLInputElement>document.getElementById("senhaPerfil2");

    if (choose == 'true') {
      propFieldset1.disabled = false;
      propFieldset2.disabled = false;
      propEdit.disabled = false;
      localStorage.setItem('escolha', 'false');
      showPassword.setAttribute('type', 'text');
      showPassword2.setAttribute('type', 'text');
    } else {
      propFieldset1.disabled = true;
      propFieldset2.disabled = true;
      propEdit.disabled = true;
      localStorage.setItem('escolha', 'true');
      showPassword.setAttribute('type', 'password');
      showPassword2.setAttribute('type', 'password');
    }
  }

  salvar() {
    this.usuarioService.attDadosUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      localStorage.setItem('Perfil', this.usuario.perfil)
      this.router.navigate(['/feed']);
      location.assign('/feed');
    })
  }

  btnSim() {
    this.usuarioService.deletarUsuario(this.usuario.codigo).subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/home']);
    })
  }

  perfil() {
    let adm = false;
    let perfil = localStorage.getItem('Perfil');

    if (perfil == "adm") {
      adm = true;
    }
    return adm;
  }
}

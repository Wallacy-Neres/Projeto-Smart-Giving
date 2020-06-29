import { Component, OnInit } from '@angular/core';
import { faPhoneSquareAlt, faUserCircle, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  faPhoneSquareAlt = faPhoneSquareAlt;
  faUserCircle = faUserCircle;
  faEnvelopeSquare = faEnvelopeSquare;

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    let nome: string = (<HTMLSelectElement>document.getElementById('nomeContato')).value;
    let email: string = (<HTMLSelectElement>document.getElementById('emailContato')).value;
    let telefone = (<HTMLSelectElement>document.getElementById('telContato')).value;
    let mensagem: string = (<HTMLSelectElement>document.getElementById('msgContato')).value;

    if (this.validaDados(nome, email, mensagem)) {
      alert("Dados enviados com sucesso!");
    } else {
      event.preventDefault();
    }
  }

  validaDados(name: string, mail: string, msg: string) {
    document.getElementById("alert-name").style.visibility = "hidden";
    document.getElementById("alert-email").style.visibility = "hidden";
    document.getElementById("alert-mensagem").style.visibility = "hidden";

    let controle = 0;    //-> Faz o controle das verificacões

    if (name.length < 3) {
      document.getElementById("alert-name").innerHTML = "Nome Inválido!";
      document.getElementById("alert-name").style.visibility = "visible";
      document.getElementById("nomeContato").style.border = "2px solid #dc3545";
      controle++;
    } else {
      document.getElementById("nomeContato").style.border = "1px solid #ced4da";
    }

    if (msg.length < 10) {
      document.getElementById("alert-mensagem").innerHTML = "Texto Inválido!";
      document.getElementById("alert-mensagem").style.visibility = "visible";
      document.getElementById("msgContato").style.border = "2px solid #dc3545";
      controle++;
    } else {
      document.getElementById("msgContato").style.border = "1px solid #ced4da";
    }

    // Verificacoes do Email
    let auxEmail = mail.split(" ");         // Separa em um array caso haja espaco no meio do email informado
    let antesArroba = mail.substring(0, mail.indexOf("@"));                         // Pega o que está antes do @
    let depoisArroba = mail.substring(mail.indexOf("@") + 1, mail.length);     // Pega o que está depois do @

    if (auxEmail.length > 1) {      // Verifica se há espacos entre o email e/ou é uma string vazia
      document.getElementById("alert-email").innerHTML = "Há espacos no e-mail!";
      document.getElementById("alert-email").style.visibility = "visible";
      document.getElementById("emailContato").style.border = "2px solid #dc3545";
      controle++;
    } else if (antesArroba.length < 3 || antesArroba.indexOf("@") != -1) {
      document.getElementById("alert-email").innerHTML = "E-mail Inválido!";
      document.getElementById("alert-email").style.visibility = "visible";
      document.getElementById("emailContato").style.border = "2px solid #dc3545";
      controle++;
    } else if (depoisArroba.length < 5 || depoisArroba.indexOf("@") != -1 || !(depoisArroba.endsWith(".com"))) {
      document.getElementById("alert-email").innerHTML = "E-mail Inválido!";
      document.getElementById("alert-email").style.visibility = "visible";
      document.getElementById("emailContato").style.border = "2px solid #dc3545";
      controle++;
    } else {
      document.getElementById("emailContato").style.border = "1px solid #ced4da";
    }

    if (controle > 0) {
      return false
    } else {
      return true;
    }
  }
}

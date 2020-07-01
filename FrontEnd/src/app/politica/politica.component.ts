import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', function () { //escuta os eventos de rolagem da página
      let elemento = document.getElementById('menuLateral'); //obtem o menu a ser fixado

      if (elemento == null)
        return;

      let posicaoDoTopoDoElemento = elemento.getBoundingClientRect().top + window.scrollY; //obtem o topo do menu na pagina

      if (window.scrollY >= posicaoDoTopoDoElemento) { //Se o topo da página atual for maior que o topo do menu
        elemento.classList.add('sticky-top'); //Coloca menu fixo
      } else {
        elemento.classList.remove('sticky-top'); //Se não remove menu fixo
      }
    });

    window.scroll(0, 0);
  }

  irParaElemento($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {
  meuFavorito: boolean = false;

  mostrarCursos : boolean = false;
  cursos: string[] = ["Angular","React","Vue"];

  constructor() { }

  ngOnInit(): void {
  }

onClick(){
  this.meuFavorito = !this.meuFavorito;
}
onMostrarCursos(){
  this.mostrarCursos = !this.mostrarCursos;
}
}

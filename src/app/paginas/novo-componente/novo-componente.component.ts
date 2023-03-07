import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.scss']
})
export class NovoComponenteComponent implements OnInit {
  private nome: string;
  anoNascimento: number;

  constructor() {
    this.nome = "Dembele";
    this.anoNascimento = 2003;
  }

  idade(): number {
    return 2023 - this.anoNascimento;
  }

  ngOnInit(): void {
    console.log("Nome: " + this.nome);
    console.log("idade: " + this.idade());
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  resultado: string
  numero: number
  formVerificarNumero: FormGroup


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formVerificarNumero = this.fb.group({
      numero: ['', [Validators.required]]
    });

    this.formVerificarNumero.valueChanges.subscribe(form => {
      if (form.numero === null) this.resultado = ''
    })
  }

  verificarNumero(numero: number): void {
    //Verificar se o número é esotérico
    if (numero % 3 === 0 && numero % 5 === 0) {
      this.resultado = `${numero} é um número esotérico.`
    } else if (this.verificarNumeroPrimo(numero)) { //Verificar número primo
      this.resultado = `${numero} é um número cético e primo.`
    } else { //Se não é esotérico e nem primo, então é um número cético
      this.resultado = `${numero} é um número cético.`
    }
  }

  verificarNumeroPrimo(numero: number): boolean {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false
    }
    return numero > 1;
  }

}

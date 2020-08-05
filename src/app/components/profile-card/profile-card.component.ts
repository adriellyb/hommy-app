import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  //importando a informaçao do profile.page.ts
  @Input() name:string;
  @Input() type:string;
  @Input() date_of_birth:string;
  @Input() phone:string;
  @Input() image:string;

  //criando um evento pressionar o botao 
  @Output() buttonPressed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  //emitindo o evento para o profile.page.ts(pai)
  boom() {
    console.log('Evento emitido')
    this.buttonPressed.emit('Você estará alterando o seu perfil locatário para locador.');
  }
}

import { Component, OnInit } from '@angular/core';

class Republicas {
  img: string;
  name: string;
  address: string;
  description: string;
  price: number;
  beds: number;
  proper_name: string;
  proper_photo: string;
  ehSuperhost: boolean; //indica que faz parte de um grupo de republicas bem avaliadas
}

@Component({
  selector: 'app-republic',
  templateUrl: './republic.page.html',
  styleUrls: ['./republic.page.scss'],
})
export class RepublicPage implements OnInit {

  republicas: Republicas[];

  constructor() { }

  ngOnInit() {

    this.republicas = [
      
      {
        img: '../assets/img4.png',
        name: 'Republica das Orquideas',
        address: 'Rua Abelardo  Bueno, 77',
        description: 'Republica aconchegante localizada em Bonsucesso, com cozinha compartilhada com sala e quartos individuais com cama solteiro e cama de casal. Espaço silencioso e tranquilo para estudos.',
        price: 700.00,
        beds: 3,
        proper_name: 'Augusto',
        proper_photo: '../assets/img2.png',
        ehSuperhost: true,
      }
    ];
  }

}

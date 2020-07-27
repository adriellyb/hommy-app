import { Component, OnInit } from '@angular/core';

class Republicas {
  img: string;
  name: string;
  address: string;
  description: string;
  price: number;
  bedrooms: number;
  ehSuperhost: boolean; //indica que faz parte de um grupo de republicas bem avaliadas
}


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  republicas: Republicas[];

  constructor() { }

  ngOnInit() {

    this.republicas = [
      
      {
        img: '../assets/img4.png',
        name: 'Republica A',
        address: 'Rua Abelardo  Bueno, 77',
        description: 'Republica-casa bonita e espaçosa',
        price: 700.00,
        bedrooms: 3,
        ehSuperhost: true,
      },
      {
        img: '../assets/img5.png',
        name: 'Republica B',
        address: 'Rua Rabicó, 127',
        description: 'Republica-casa bonita e espaçosa',
        price: 600.00,
        bedrooms: 1,
        ehSuperhost: false,
      },
      {
        img: '../assets/img6.png',
        name: 'Republica C',
        address: 'Travessa Geraldo Vandré, 61',
        description: 'Republica-casa bonita e espaçosa',
        price: 550.00,
        bedrooms: 1,
        ehSuperhost: true,
      },
      {
        img: '../assets/img7.png',
        name: 'Republica D',
        address: 'Av. Camargo Gonçalves, 61',
        description: 'Republica-casa bonita e espaçosa',
        price: 600.00,
        bedrooms: 2,
        ehSuperhost: true,
      }
    ];

  }

}

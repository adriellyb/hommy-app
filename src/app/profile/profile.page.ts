import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  p_name: string = "Adrielly Balbino"
  p_type: string = "Locatário"
  p_date_of_birth = "11/01/1995"
  p_phone: string = "(21) 90000-0000"
  p_image: string = '../assets/img8.jpg'

  constructor() { }

  //recebe o evento criado no custom-card.component.ts(filho)
  handleEvent(event:any){
    console.log("Evento recebido");
    alert(event);
  }

  ngOnInit() {
  }
}

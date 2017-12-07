import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-operador',
  templateUrl: './menu-operador.component.html',
  styleUrls: ['./menu-operador.component.scss']
})
export class MenuOperadorComponent implements OnInit {
  public mos:boolean= true;

  constructor() { }

  ngOnInit() {
  }
  OnMost(value){

    if (value==2) {
      this.mos = false;
    } else {
      this.mos = true;
    }
  }

}

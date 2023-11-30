import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor(private router: Router){

  }

  goTareas(){
    this.router.navigate(['paginas/tarea'])
  }

  goLista(){
    this.router.navigate(['paginas/lista'])
  }

}

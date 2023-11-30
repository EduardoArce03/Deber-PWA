import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { TareaFirebaseServices } from 'src/app/services/tarea-firebase-services';
import { TareaServices } from 'src/app/services/tarea-services';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
  nota : Nota = new Nota()
  constructor(private router : Router, private tareaService : TareaServices, private tareaFirebase : TareaFirebaseServices, private route: ActivatedRoute){
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.nota = params['tarea']

      }
  }


  

  saveTarea(){
   
      this.tareaService.addTarea(this.nota)
      console.log('tareas', this.tareaService.getTarea())
      this.tareaFirebase.save(this.nota)
      this.nota = new Nota();
    }

  goListado(){
    this.router.navigate(['paginas/lista'])
  }


}

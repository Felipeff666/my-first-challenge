import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tarea } from './app.interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  listaTareas:tarea[]=[];
  claseTarea:string='tarea';
  tarea:tarea ={
    descripcion:'',
    estado:'pendiente'
  }

  agregarTarea(){
    let nuevatarea:tarea={
      descripcion: this.tarea.descripcion,
      estado:'Pendiente'
    }
    this.listaTareas.push(nuevatarea);
    this.tarea.descripcion='';
    console.log(this.listaTareas)
  }

  eliminarTarea(indice:number){
    this.listaTareas.splice(indice,1)
  }

  terminarTarea(indice:number){
    this.listaTareas[indice].estado="Terminado"
  }

}

import { Component, OnInit } from '@angular/core';
import {Tarea} from '../tarea';
import {ListadoTareasService} from '../listado-tareas.service';
import {TareaEditService} from '../tarea-edit.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tarea: Tarea;

  constructor(
    public listadoTareasService: ListadoTareasService,
    public tareaEditService: TareaEditService
  ) { }

  ngOnInit() {
    this.tareaEditService.tarea.subscribe(tarea => this.tarea = tarea);
  }

  guardar() {
    if (this.tarea.idTarea){
      this.listadoTareasService.modificar(this.tarea);
    } else {
      this.listadoTareasService.guardar(this.tarea);
    }

    this.tarea = new Tarea();
  }

}

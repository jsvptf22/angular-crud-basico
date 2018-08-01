import { Component, OnInit } from '@angular/core';
import {Tarea} from '../tarea';
import {ListadoTareasService} from '../listado-tareas.service';
import {TareaEditService} from '../tarea-edit.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado: Tarea[];
  idTareaEdit: Tarea;

  constructor(
    public listadoTareasService: ListadoTareasService,
    public tareaEditService: TareaEditService
  ) {}

  ngOnInit() {
    this.actualizarListado();
    this.tareaEditService.tarea.subscribe(tarea => this.idTareaEdit = tarea);
  }

  actualizarListado() {
    this.listado = this.listadoTareasService.consultar();
  }

  eliminar(tarea: Tarea) {
    const idTarea = tarea.idTarea;
    this.listadoTareasService.eliminar(idTarea);
    this.actualizarListado();
  }

  editar(tarea: Tarea) {
    this.tareaEditService.actualizarIdTarea(tarea);
  }
}

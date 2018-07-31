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
  idTareaEdit: number;

  constructor(
    public listadoTareasService: ListadoTareasService,
    public tareaEditService: TareaEditService
  ) {}

  ngOnInit() {
    this.actualizarListado();
    this.tareaEditService.idTarea.subscribe(id => this.idTareaEdit = id)
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
    this.tareaEditService.actualizarIdTarea(tarea.idTarea);
  }
}

import { Injectable } from '@angular/core';
import {Tarea} from './tarea';

@Injectable({
  providedIn: 'root'
})
export class ListadoTareasService {

  public listadoTareas: Tarea[] = [];

  constructor() { }

  guardar(tarea: Tarea) {
    tarea.idTarea = this.crearId();
    this.listadoTareas.push(tarea);
  }

  consultar() {
    return this.listadoTareas;
  }

  modificar(tarea: Tarea) {
    this.listadoTareas.map(t => t.idTarea === tarea.idTarea ? tarea : t);
  }

  crearId() {
    return this.listadoTareas.length + 1;
  }

  eliminar(idTarea) {
    this.listadoTareas = this.listadoTareas.filter(t => t.idTarea !== idTarea);
  }
}

import { Injectable } from '@angular/core';
import {Tarea} from './tarea';

@Injectable({
  providedIn: 'root'
})
export class ListadoTareasService {

  public listadoTareas: Tarea[] = [];

  constructor() { }

  guardar(tarea: Tarea) {
    this.listadoTareas.push(tarea);
  }

  consultar() {
    return this.listadoTareas;
  }
}

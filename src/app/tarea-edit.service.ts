import { Injectable } from '@angular/core';
import {Tarea} from './tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaEditService {

  public tarea: Tarea;

  constructor() { }

  marcar(tarea: Tarea) {
    this.tarea = tarea;
  }
}

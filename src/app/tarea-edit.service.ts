import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Tarea} from './tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaEditService {

  private tareaSource = new BehaviorSubject(new Tarea());
  public tarea = this.tareaSource.asObservable();

  constructor() { }

  actualizarIdTarea(tarea: Tarea) {
    this.tareaSource.next(tarea);
  }
}

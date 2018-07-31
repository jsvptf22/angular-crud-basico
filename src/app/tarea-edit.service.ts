import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Tarea} from './tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaEditService {

  private tareaSource = new BehaviorSubject(0);
  public idTarea = this.tareaSource.asObservable();

  constructor() { }

  actualizarIdTarea(id: number) {
    this.tareaSource.next(id)
  }
}

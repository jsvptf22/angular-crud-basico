import { Component, OnInit } from '@angular/core';
import {Tarea} from '../tarea';
import {ListadoTareasService} from '../listado-tareas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado: Tarea[];

  constructor(
    public listadoTareasService: ListadoTareasService
  ) {}

  ngOnInit() {
    this.listado = this.listadoTareasService.consultar();
  }

}

import { Component, OnInit } from '@angular/core';
import {Tarea} from '../tarea';
import {ListadoTareasService} from '../listado-tareas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: string;
  descripcion: string;
  responsable: string;

  constructor(
    public listadoTareasService: ListadoTareasService
  ) { }

  ngOnInit() {
  }

  guardar() {
    const tarea = new Tarea(
      this.nombre,
      this.descripcion,
      this.responsable
    );

    this.listadoTareasService.guardar(tarea);
    this.eliminarAtributos();
    console.log(this.listadoTareasService.consultar());
  }

  eliminarAtributos() {
    this.nombre = '';
    this.descripcion = '';
    this.responsable = '';
  }

}

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

  nombre: string;
  descripcion: string;
  responsable: string;
  idTarea: number;
  tareaEdit: number;

  constructor(
    public listadoTareasService: ListadoTareasService,
    public tareaEditService: TareaEditService
  ) { }

  ngOnInit() {
    this.tareaEditService.idTarea.subscribe(id => this.tareaEdit = id)
  }

  guardar() {
    const tarea = new Tarea(
      this.idTarea,
      this.nombre,
      this.descripcion,
      this.responsable
    );

    this.listadoTareasService.guardar(tarea);
    this.eliminarAtributos();
  }

  eliminarAtributos() {
    this.nombre = '';
    this.descripcion = '';
    this.responsable = '';
  }

}

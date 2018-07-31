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
  tareaEdit: Tarea;

  constructor(
    public listadoTareasService: ListadoTareasService,
    public tareaEditService: TareaEditService
  ) { }

  ngOnInit() {
    this.validarEditar();
  }

  validarEditar() {
    this.tareaEdit = this.tareaEditService.tarea;
    console.log(this.tareaEdit);
    if (this.tareaEdit && this.tareaEdit.idTarea) {
      this.nombre = this.tareaEdit.nombre;
      this.descripcion = this.tareaEdit.descripcion;
      this.responsable = this.tareaEdit.responsable;
      this.idTarea = this.tareaEdit.idTarea;
    }
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

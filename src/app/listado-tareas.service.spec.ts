import { TestBed, inject } from '@angular/core/testing';

import { ListadoTareasService } from './listado-tareas.service';

describe('ListadoTareasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListadoTareasService]
    });
  });

  it('should be created', inject([ListadoTareasService], (service: ListadoTareasService) => {
    expect(service).toBeTruthy();
  }));
});

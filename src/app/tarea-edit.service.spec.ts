import { TestBed, inject } from '@angular/core/testing';

import { TareaEditService } from './tarea-edit.service';

describe('TareaEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareaEditService]
    });
  });

  it('should be created', inject([TareaEditService], (service: TareaEditService) => {
    expect(service).toBeTruthy();
  }));
});

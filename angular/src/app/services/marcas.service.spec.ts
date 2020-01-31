import { TestBed } from '@angular/core/testing';

import { MarcasService } from './marcas.service';

describe('MarcasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcasService = TestBed.get(MarcasService);
    expect(service).toBeTruthy();
  });
});

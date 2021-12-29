import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor(
    private https: HttpClient
  ) { }

  listMarcas(): Observable<any> {
    return this.get.https://parallelum.com.br/fipe/api/v1/carros/marcas
  };

  buscar(id: number): Observable<any> { 
    return this.get.https://parallelum.com.br/fipe/api/v1/carros/marcas/{id}/modelos
  };
}

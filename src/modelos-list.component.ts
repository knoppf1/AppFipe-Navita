import { Component, OnInit } from '@angular/core';
import { ModelosService } from './../modelos.service';

@Component(

)
export class ModelosListComponent implements OnInit {
  itens: any[] = [];
  modelos: any[] = [];
  error: string = '';

  constructor(
    private modelosService: ModelosService,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.modelosService.listMarcas().subscribe((res) => {
      this.itens = res;
    }, err => {
      this.error = err;
    });
  }

  buscarmodelos(id :number) {
    this.modelosService.buscar(id).subscribe((res) => {
      this.modelos = res;
    }, err => {
      this.error = err;
    });
  }

}

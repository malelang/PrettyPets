import { Injectable } from '@angular/core';
import{ Vet}from './vet';
@Injectable()
export class VeterinarioDataProvider {

  data:Vet[]= [
    { nombre: 'Pelos y Patas', direccion: 'BarrioModelo', contacto:'555', imagen: 'http://www.pelosypatasspa.com/sites/default/files/imagenes/logospng/cabezas.png' },
    { nombre: 'Cannis e Cattus', direccion: 'Av. Panamericana', contacto:'666',  imagen: 'https://telepesquisa.com/api_images/system/clientes/logos/000/237/731/large/20231_CaniseCatus.png' },
    { nombre: 'MiPerrito', direccion: 'Por ahi', contacto:'777', imagen:'' },
    { nombre: 'Mascotitas', direccion: 'Carrera 6', contacto:'888',  imagen: '' },
    
  ];

  constructor() {
    
  }
}
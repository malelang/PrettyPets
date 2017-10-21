import { Injectable } from '@angular/core';
import{ Vet}from './vet';
@Injectable()
export class VeterinarioDataProvider {

  data:Vet[]= [
    { id:1,nombre: 'Pelos y Patas', direccion: 'BarrioModelo', contacto:'8368299', imagen: 'http://www.pelosypatasspa.com/sites/default/files/imagenes/logospng/cabezas.png' },
    { id:2,nombre: 'Cannis e Cattus', direccion: 'Av. Panamericana', contacto:'8362578',  imagen: 'https://telepesquisa.com/api_images/system/clientes/logos/000/237/731/large/20231_CaniseCatus.png' },
    { id:3,nombre: 'Mascotas Veterinaria', direccion: 'Champagnat', contacto:'300 2846444', imagen:'http://www.mascotasclinicaveterinaria.com/img/0256/209.png' },
    
  ];

  constructor() {
    
  }
}
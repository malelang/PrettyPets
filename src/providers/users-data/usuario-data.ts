import { Injectable } from '@angular/core';
import{ Usuario}from './usuario';
@Injectable()
export class UsuarioDataProvider {

  data:Usuario[]= [
    { nombre: 'Damian Quintero', direccion: 'España', contacto:'111', genero:'m', edad: 30, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dami%C3%A1n_Quintero%2C_n%C3%BAmero_1_del_karate_mundial_en_la_modalidad_de_katas.jpg/220px-Dami%C3%A1n_Quintero%2C_n%C3%BAmero_1_del_karate_mundial_en_la_modalidad_de_katas.jpg' },
    { nombre: 'Sandy Scordo', direccion: 'Francia', contacto:'222', genero:'f', edad: 25, imagen: 'http://www.karate-news.net/stvari/uploads/2014/02/Scordo.jpg' },
    { nombre: 'Luca Valdesi', direccion: 'Italia', contacto:'333', genero:'m', edad: 35, imagen: 'http://cdn.karatebyjesse.com/wp-content/uploads/2012/09/valdesi-pose.jpg' },
    { nombre: 'Rika Usami', direccion: 'Japon', contacto:'444', genero:'f', edad: 27, imagen: 'https://i.ytimg.com/vi/sa26yDGqD5I/maxresdefault.jpg' },
    
  ];

  constructor() {
    
  }
}
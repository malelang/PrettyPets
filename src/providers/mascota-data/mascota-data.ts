import { Injectable } from '@angular/core';
import{ Mascota }from './mascota';
@Injectable()
export class MascotaDataProvider {

  data:Mascota[]= [
    { nombre: 'Toby',tipo:'p', raza: 'Pinscher', sexo:'m', edad: 2, imagen: 'https://i.pinimg.com/736x/b2/c7/a0/b2c7a0dfc419a6ea6503f4dd2218ce61--mini-pinscher-miniature-pinscher.jpg' },
    { nombre: 'Nymeria',tipo:'p', raza: 'Lobo Huargo', sexo:'f', edad: 4, imagen: 'https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/mzgw5sw70vd0xloioiiz.jpg' },
    { nombre: 'Mat',tipo:'p', raza: 'Pastor Alemán', sexo:'m', edad: 6, imagen: 'https://i2.wp.com/www.mundoperro.net/wp-content/uploads/pastor-aleman-adulto.jpg?w=804&h=587&crop&ssl=1' },
    { nombre: 'Kira',tipo:'p', raza: 'Schnauzer', sexo:'f', edad: 3, imagen: 'https://www.okchicas.com/wp-content/uploads/2017/06/perritos-schnauzer-malos-12.jpg' },
    
  ];

  constructor() {
    
  }
}
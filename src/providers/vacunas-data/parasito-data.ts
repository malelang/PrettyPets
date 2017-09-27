import { Injectable } from '@angular/core';
import{ Parasito}from './parasito';
@Injectable()
export class ParasitoDataProvider {

  data:Parasito[]= [
    {fecha:null,peso: 10 ,producto:'ACME',proxima:null},
    {fecha:null, peso:7, producto:'Quereme',proxima:null},
  ];

  constructor() {
    
  }
}
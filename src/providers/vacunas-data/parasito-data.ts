import { Injectable } from '@angular/core';
import{ Parasito}from './parasito';
@Injectable()
export class ParasitoDataProvider {

  data:Parasito[]= [
    {fecha:new Date().toISOString(),peso: 10 ,producto:'ACME',proxima:null},
    {fecha:new Date().toISOString(), peso:7, producto:'Quereme',proxima:null},
  ];

  constructor() {
    
  }
}
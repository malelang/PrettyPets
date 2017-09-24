import { Injectable } from '@angular/core';
import{ Parasito}from './parasito';
@Injectable()
export class ParasitoDataProvider {

  data:Parasito[]= [
    {fecha:'20/09/16',peso: 10 ,producto:'ACME',proxima:'20/09/2017'},
    {fecha:'17/11/15', peso:7, producto:'Quereme',proxima:'14/05/2017'},
  ];

  constructor() {
    
  }
}
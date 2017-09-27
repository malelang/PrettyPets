import { Injectable } from '@angular/core';
import{ Vacuna}from './vacuna';
@Injectable()
export class VacunaDataProvider {

  data:Vacuna[]= [
    {fecha:null,enfermedad:'Triple Viral',veterinario:'Arboleda'},
    {fecha:null, enfermedad:'Rabia',veterinario:'Noguera'},
  ];

  constructor() {
    
  }
}
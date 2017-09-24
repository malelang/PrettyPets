import { Injectable } from '@angular/core';
import{ Vacuna}from './vacuna';
@Injectable()
export class VacunaDataProvider {

  data:Vacuna[]= [
    {fecha:'20/09/16',enfermedad:'Triple Viral',veterinario:'Arboleda'},
    {fecha:'17/11/15', enfermedad:'Rabia',veterinario:'Noguera'},
  ];

  constructor() {
    
  }
}
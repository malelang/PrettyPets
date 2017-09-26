import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Vet} from '../../providers/vets-data/vet';
import {VeterinarioDataProvider} from '../../providers/vets-data/vets-data';

@Component({
  selector: 'page-vets',
  templateUrl: 'vets.html',
})
export class VetsPage {

veterinarios:Vet[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public service: VeterinarioDataProvider) {
    this.veterinarios=service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VetsPage');
  }

}

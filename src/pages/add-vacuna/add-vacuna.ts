import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Vacuna} from '../../providers/vacunas-data/vacuna';
import {Parasito} from '../../providers/vacunas-data/parasito';

@Component({
  selector: 'page-add-vacuna',
  templateUrl: 'add-vacuna.html',
})
export class AddVacunaPage {

  vacuna:Vacuna;
  parasito:Parasito;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vacuna= new Vacuna;
    this.parasito= new Parasito;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVacunaPage');
  }

  addv(){
    this.navCtrl.pop();
  }

  addp(){
    this.navCtrl.pop();
  }
}

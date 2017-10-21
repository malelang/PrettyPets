import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddMascotaPage } from '../add-mascota/add-mascota';

import { SaveDataProvider, Usuario } from '../../providers/save-data/save-data';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service2: SaveDataProvider,
  ) {
    this.user = new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  goToSecondPage() {
    this.service2.usuario = this.user;
    this.navCtrl.push(AddMascotaPage);
  }





}

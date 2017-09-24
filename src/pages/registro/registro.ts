import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddMascotaPage} from '../add-mascota/add-mascota';
import {Usuario} from '../../providers/users-data/usuario';


@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuario:Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams
   ) {
    this.usuario=new Usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  goToSecondPage(){

    this.navCtrl.push(AddMascotaPage);
  }

}

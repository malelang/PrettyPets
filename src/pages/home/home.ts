import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {LoginPage} from '../login/login';
import {PerfilPage} from '../perfil/perfil';
import {Storage} from '@ionic/storage';
import {VetsPage} from '../vets/vets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  root: any = PerfilPage;
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.tab1=PerfilPage;
    this.tab2=VetsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

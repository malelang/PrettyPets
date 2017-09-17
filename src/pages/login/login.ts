import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){ 
    this.storage.set("logged",true);
    this.navCtrl.setRoot(HomePage); //cada vez que yo haga login, voy a hacer que la pagina principal sea root
    //sirve tambien para destruir la cola de paginas que tenía
  }

}

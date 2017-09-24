import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from'../tabs/tabs';
import {Storage} from '@ionic/storage';
import {RegistroPage} from '../registro/registro';
import {Usuario} from '../../providers/users-data/usuario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:Usuario;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage: Storage) {
    this.usuario=new Usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){ 
    this.storage.set("logged",true);
    this.navCtrl.setRoot(TabsPage); 
  }

  register(){
    this.navCtrl.push(RegistroPage);
  }
}

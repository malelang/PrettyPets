import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {LoginPage} from '../login/login';
import { UsuarioDataProvider} from '../../providers/users-data/usuario-data';
import { Usuario} from '../../providers/users-data/usuario';
import {MascotaDataProvider} from '../../providers/mascota-data/mascota-data';
import {Mascota} from '../../providers/mascota-data/mascota';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuarios: Usuario[]=[];
  mascotas: Mascota[]=[];
  usuario1: Usuario;
  mascota1: Mascota;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage: Storage, public service: UsuarioDataProvider,
  public service2:MascotaDataProvider) {

    this.usuarios=service.data;
    this.mascotas=service2.data;
    this.usuario1=this.usuarios[1];
    this.mascota1=this.mascotas[1];
    //console.log(this.nav.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  logout(){
    this.storage.set("logged",false);
    this.navCtrl.parent.parent.setRoot(LoginPage);
    
  }
}

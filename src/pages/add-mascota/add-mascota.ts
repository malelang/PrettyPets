import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PerfilPage} from '../perfil/perfil';
import {PerrosDataProvider} from '../../providers/mascota-data/perros-data';
import {GatosDataProvider} from '../../providers/mascota-data/gatos-data';
import {Mascota} from '../../providers/mascota-data/mascota';

@Component({
  selector: 'page-add-mascota',
  templateUrl: 'add-mascota.html',
})
export class AddMascotaPage {

  razagatos:String[]=[];
  razaperros:String[]=[];
  mascota:Mascota;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: PerrosDataProvider,
    public service2:GatosDataProvider) {

      this.razaperros=service.data;
      this.razagatos=service2.data;
      this.mascota=new Mascota;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMascotaPage');
  }

  goToProfile(){
    this.navCtrl.setRoot(PerfilPage);
  }

}

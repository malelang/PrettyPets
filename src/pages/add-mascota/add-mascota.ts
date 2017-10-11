import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import {PerrosDataProvider} from '../../providers/mascota-data/perros-data';
import {GatosDataProvider} from '../../providers/mascota-data/gatos-data';
//import {Mascota} from '../../providers/mascota-data/mascota';
import {Mascota, MascotaProvider} from '../../providers/mascota/mascota';
import {TabsPage} from '../tabs/tabs';
import {LoginPage} from '../login/login';

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
    public service2:GatosDataProvider,
    public service3:MascotaProvider,
    public toastCtrl: ToastController) {

      this.razaperros=service.data;
      this.razagatos=service2.data;
      this.mascota=new Mascota();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMascotaPage');
    
  }

  goToProfile(){
    
    this.service3.insert(this.mascota).subscribe(res=>{
      if(res.success){
        this.showToast("Mascota registrada")
        this.navCtrl.setRoot(TabsPage);
      } else{
        this.showToast("Hubo un error al insertar la mascota");
      }
    });
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  showToast(msg:string){
    let toast=this.toastCtrl.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }

}

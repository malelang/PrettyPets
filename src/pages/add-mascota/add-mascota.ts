import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import {PerrosDataProvider} from '../../providers/mascota-data/perros-data';
import {GatosDataProvider} from '../../providers/mascota-data/gatos-data';

import {SaveDataProvider,Mascota,Usuario} from '../../providers/save-data/save-data';

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
  usuario: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: PerrosDataProvider,
    public service2:GatosDataProvider,
    public service4: SaveDataProvider,
    public toastCtrl: ToastController) {

      this.razaperros=service.data;
      this.razagatos=service2.data;
      this.mascota=new Mascota();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMascotaPage');
    
  }

  goToProfile(){
    this.service4.insertpet(this.mascota).subscribe(
      res=>{
        if(res.success){
          this.showToast("Mascota registrada exitosamente");
        } else{
          this.showToast("Hubo un error al registrar tu mascota");
        }
      }
    );
    this.usuario=this.service4.usuario;
    this.usuario.mascotas.push(this.mascota);
    this.service4.insert(this.usuario).subscribe(res=>{
      if(res.success){
        this.showToast("Usuario registrado exitosamente")
        this.navCtrl.setRoot(LoginPage);
      } else{
        this.showToast("Hubo un error al insertar el usuario");
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
      position:"top",
    });
    toast.present();
  }

  getUser(){
    let usuariotemp:Usuario;
    this.service4
  }
}

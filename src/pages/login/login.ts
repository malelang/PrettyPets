import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {TabsPage} from'../tabs/tabs';
import {Storage} from '@ionic/storage';
import {RegistroPage} from '../registro/registro';
import {Usuario} from '../../providers/save-data/save-data';
import {LoginServiceProvider} from '../../providers/login-service/login-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:Usuario;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage: Storage, public service: LoginServiceProvider
  , public toastCtrl: ToastController
  , public loadingCtrl: LoadingController) {
    this.usuario=new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
        let loading =  this.loadingCtrl.create({content:"Cargando ..."});      
        loading.present();
        this.service.loguser(this.usuario.username, this.usuario.password).subscribe(res => {
          loading.dismiss();       
          if (res.success) {
            this.service.usuario=this.usuario;
            this.navCtrl.push(TabsPage);
            this.storage.set("logged", true);
            this.showToast("Sesión correctamente iniciada")
          } else {
            this.showToast("No se ha encontrado un usuario con estas características")
          }
        }, err =>{
          this.showToast("Error en la conexión fontend")
        });

      }

  register(){
    this.navCtrl.push(RegistroPage);
  }

  showToast(msg:string){
    let toast=this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position:"top",
    });
    toast.present();
  }
}

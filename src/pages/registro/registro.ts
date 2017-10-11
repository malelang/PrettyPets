import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {AddMascotaPage} from '../add-mascota/add-mascota';
//import {Usuario} from '../../providers/users-data/usuario';
import {UsuarioProvider, Usuario} from '../../providers/usuario/usuario';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuario:Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: UsuarioProvider,
    public toastCtrl: ToastController
   ) {
    this.usuario=new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  goToSecondPage(){
    
    this.service.insert(this.usuario).subscribe(res=>{
      if(res.success){
        this.showToast("Usuario registrado")
        this.navCtrl.push(AddMascotaPage);
      } else{
        this.showToast("Hubo un error al insertar el usuario");
      }
    });
  }

  showToast(msg:string){
    let toast=this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "top",
    });
    toast.present();
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Usuario} from '../../providers/save-data/save-data';
import {LoginServiceProvider} from '../../providers/login-service/login-service';
import {NewpetServiceProvider} from '../../providers/newpet-service/newpet-service';
import {PerfilPage} from '../perfil/perfil';

@Component({
  selector: 'page-configure-user',
  templateUrl: 'configure-user.html',
})
export class ConfigureUserPage {

  id:string;
  usuario:Usuario;
  newdireccion:string;
  newcontacto:string;
  newusername:string;
  newpassword:string;
  newedad:number;
  newimagen:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage:Storage, public toastCtrl:ToastController,
    public service: LoginServiceProvider,
    public service2: NewpetServiceProvider,) {
      this.usuario=new Usuario();
      this.newcontacto="";
      this.newdireccion="";
      this.newusername="";
      this.newpassword="";
      this.newedad=0;
      this.newimagen="";
  }

  ionViewDidLoad() {
    this.storage.get("id").then((data)=>{
      this.id=data;
    }).catch((err)=>{
      this.showToast("Error al obtener la clave, intente de nuevo")
    });
    this.usuario=this.service.usuario;
  }

  

  updateDireccion(){
    this.service2.updateDireccion(this.newdireccion,this.id).subscribe(
      (res)=>{
        if(res.success){
          this.showToast("Nueva direccion actualizada exitosamente");
          this.showToast("Deslize para actualizar");
          this.navCtrl.pop();
        } else{
          this.showToast("Hubo un error al actualizar la direccion");
        }
    }
  );
}

  updateContacto(){
    this.service2.updateContacto(this.newcontacto,this.id).subscribe(
      (res)=>{
        if(res.success){
          this.showToast("Nuevo numero de contacto actualizada exitosamente");
          this.showToast("Deslize para actualizar");
          this.navCtrl.pop();
        } else{
          this.showToast("Hubo un error al actualizar el numero de contacto");
        }
    }
  );
}



  updateEdad(){
    this.service2.updateEdad(this.newedad,this.id).subscribe(
      (res)=>{
        if(res.success){
          this.showToast("Edad actualizada exitosamente");
          this.showToast("Deslize para actualizar");
          this.navCtrl.pop();
        } else{
          this.showToast("Hubo un error al actualizar la edad");
        }
    }
  );
  }

  updateImage(){
    this.service2.updateImagen(this.newimagen,this.id).subscribe(
      (res)=>{
        if(res.success){
          this.showToast("Imagen de perfil actualizada exitosamente");
          this.showToast("Deslize para actualizar");
          this.navCtrl.pop();
        } else{
          this.showToast("Hubo un error al actualizar la imagen de perfil");
        }
    }
  );
  }

  showToast(msg:string){
    let toast=this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position:"top",
    });
    toast.present();
  }
}

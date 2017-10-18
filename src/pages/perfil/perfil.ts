import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {LoginPage} from '../login/login';
import {NewMascotaPage} from '../new-mascota/new-mascota';
import {ConfigureUserPage} from '../configure-user/configure-user';
import {Mascota,Usuario, SaveDataProvider} from '../../providers/save-data/save-data';
import {LoginServiceProvider} from '../../providers/login-service/login-service';
import {NewpetServiceProvider} from '../../providers/newpet-service/newpet-service';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  user: Usuario;
  data: Mascota[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage: Storage,
  public service:SaveDataProvider,
  public service2: LoginServiceProvider,
  public service3: NewpetServiceProvider,
  public toastCtrl: ToastController) {
    this.user=new Usuario();
  }

  

  ionViewDidLoad() {
    
    this.loadUsers();
    this.loadPets();
  }

  logout(){
    this.storage.set("id",null);
    this.storage.set("logged",false);
    this.navCtrl.parent.parent.setRoot(LoginPage);
    
  }

  

  loadPets(refresher=null){
    this.data=this.user.mascotas;
  }

  loadUsers(refresher=null){
    //this.user=this.service2.usuario;
    //this.data=this.service.usuario.mascotas;
    this.service2.getuser(this.service2.usuario.username).subscribe(res=> 
      {this.user=res;
        this.service2.usuario=this.user;
        this.storage.set("id",this.user._id)
        this.loadPets();
        if(refresher!=null)
          {refresher.complete();}
      });
  }

  doRefresh(refresher){
    this.loadUsers(refresher);
  }

  goToNewPet(){
    this.navCtrl.push(NewMascotaPage);
  }

  goToSettings(){
    this.navCtrl.push(ConfigureUserPage);
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

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {LoginPage} from '../login/login';
import {Mascota,Usuario, SaveDataProvider} from '../../providers/save-data/save-data';
import {LoginServiceProvider} from '../../providers/login-service/login-service';



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
  public service2: LoginServiceProvider) {
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
    
  }

  goToSettings(){

  }
  

  
}

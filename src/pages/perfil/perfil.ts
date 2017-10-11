import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {LoginPage} from '../login/login';
//import { UsuarioDataProvider} from '../../providers/users-data/usuario-data';
//import { Usuario} from '../../providers/users-data/usuario';
//import {MascotaDataProvider} from '../../providers/mascota-data/mascota-data';
//import {Mascota} from '../../providers/mascota-data/mascota';
import {Mascota, MascotaProvider} from '../../providers/mascota/mascota';
import {Usuario, UsuarioProvider} from '../../providers/usuario/usuario';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  datausers: Usuario[]=[];
  //mascotas: Mascota[]=[];
  //usuario1: Usuario;
  //mascota1: Mascota;
  //mascota :Mascota;
  data: Mascota[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage: Storage, /*public service: UsuarioDataProvider,
  public service2:MascotaDataProvider,*/
  public service3: MascotaProvider, public service4:UsuarioProvider) {

    //this.usuarios=service.data;
    //this.mascotas=service2.data;
    //this.usuario1=this.usuarios[1];
    //this.mascota1=this.mascotas[1];
    //console.log(this.nav.id)
  }

  ionViewDidLoad() {
    this.loadPets();
    this.loadUsers();
  }

  logout(){
    this.storage.set("logged",false);
    this.navCtrl.parent.parent.setRoot(LoginPage);
    
  }

  

  loadPets(refresher=null){
    this.service3.all().subscribe(res=> 
      {this.data=res;
        if(refresher!=null)
          {refresher.complete();}
      });
  }

  loadUsers(refresher=null){
    this.service4.all().subscribe(res=> 
      {this.datausers=res;
        if(refresher!=null)
          {refresher.complete();}
      });
  }

  doRefresh(refresher){
    this.loadPets(refresher);
    this.loadUsers(refresher);
  }

  

  
}

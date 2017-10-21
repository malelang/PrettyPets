import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Mascota, Usuario } from '../../providers/save-data/save-data';
import { NewpetServiceProvider } from '../../providers/newpet-service/newpet-service';
import { GatosDataProvider } from '../../providers/mascota-data/gatos-data'
import { PerrosDataProvider } from '../../providers/mascota-data/perros-data';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { SaveDataProvider } from '../../providers/save-data/save-data';

@Component({
  selector: 'page-new-mascota',
  templateUrl: 'new-mascota.html',
})
export class NewMascotaPage {

  razagatos: String[] = [];
  razaperros: String[] = [];
  newmascotas: Mascota[];
  id: string;
  mascota: Mascota;
  usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public storage: Storage,
    public service: NewpetServiceProvider, public service4: LoginServiceProvider,
    public service2: GatosDataProvider, public service3: PerrosDataProvider,
    public service5: SaveDataProvider) {
    this.mascota = new Mascota();
    this.usuario = new Usuario();
    this.razagatos = this.service2.data;
    this.razaperros = this.service3.data;
  }

  ionViewDidLoad() {
    this.storage.get("id").then((data) => {
      this.id = data;

    }).catch((err) => {
      this.showToast("Error al obtener la clave, intente de nuevo")
    });
    this.usuario = this.service4.usuario;
  }

  NewPet() {
    this.usuario.mascotas.push(this.mascota);
    this.newmascotas = this.usuario.mascotas;
    this.service5.insertpet(this.mascota);
    this.service.insertpet(this.newmascotas, this.id).subscribe(
      (res) => {
        if (res.success) {
          this.showToast("Nueva mascota registrada exitosamente");
          this.showToast("Deslize para recargar");
          this.navCtrl.pop();
        } else {
          this.showToast("Hubo un error al registrar tu mascota");
        }
      });



  }

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: "top",
    });
    toast.present();
  }
}

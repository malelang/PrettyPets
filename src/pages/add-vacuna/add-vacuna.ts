import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { NewpetServiceProvider } from '../../providers/newpet-service/newpet-service';
import { Usuario, Mascota, Vacuna, Parasito } from '../../providers/save-data/save-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-add-vacuna',
  templateUrl: 'add-vacuna.html',
})
export class AddVacunaPage {

  id: string;
  vacuna: Vacuna;
  parasito: Parasito;
  newvacunas: Vacuna[] = [];
  newparasitos: Parasito[] = [];
  usuario: Usuario;
  stringmas: string[] = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: LoginServiceProvider, public storage: Storage,
    public toastCtrl: ToastController, public service2: NewpetServiceProvider) {
    this.usuario = new Usuario();
    this.vacuna = new Vacuna();
    this.parasito = new Parasito();
  }


  ionViewDidLoad() {
    this.storage.get("id").then((data) => {
      this.id = data;
    }).catch((err) => {
      this.showToast("Error al obtener la clave, intente de nuevo")
    });
    this.usuario = this.service.usuario;
    this.stringmas = this.usuario.mascotas.map(a => a.nombre);
  }


  addv() {
    this.usuario.vacunas.push(this.vacuna);
    this.newvacunas = this.usuario.vacunas;
    this.service2.insertvac(this.newvacunas, this.id).subscribe(
      (res) => {
        if (res.success) {
          this.showToast("Nueva vacuna registrada exitosamente");
          this.showToast("Deslize para recargar");
          this.navCtrl.pop();
        } else {
          this.showToast("Hubo un error al registrar la vacuna");
        }
      }
    );
  }

  addp() {
    this.usuario.parasitos.push(this.parasito);
    this.newparasitos = this.usuario.parasitos;
    this.service2.insertpar(this.newparasitos, this.id).subscribe(
      (res) => {
        if (res.success) {
          this.showToast("Desparasitacion registrada exitosamente");
          this.showToast("Deslize para recargar");
          this.navCtrl.pop();
        } else {
          this.showToast("Hubo un error al registrar la desparasitación");
        }
      }
    );
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

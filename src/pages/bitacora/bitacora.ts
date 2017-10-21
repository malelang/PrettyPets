import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Vacuna, Parasito, Usuario } from '../../providers/save-data/save-data'
import { AddVacunaPage } from '../add-vacuna/add-vacuna';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'page-bitacora',
  templateUrl: 'bitacora.html',
})
export class BitacoraPage {

  vacunas: Vacuna[];
  parasitos: Parasito[];
  user: Usuario;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay,
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: LoginServiceProvider, public storage: Storage,
    private modalCtrl: ModalController, private alertCtrl: AlertController,
  ) {
    this.user = new Usuario();
  }

  ionViewDidLoad() {
    this.loadUsers();
  }

  doRefresh(refresher) {
    this.loadUsers(refresher);
    this.loadVacunas();
    this.loadDesp();
  }

  loadUsers(refresher = null) {
    this.service.getuser(this.service.usuario.username).subscribe(res => {
    this.user = res;
      this.service.usuario = this.user;
      this.loadVacunas();
      this.loadDesp();
      if (refresher != null) { refresher.complete(); }
    });

  }

  loadVacunas() {
    this.vacunas = this.user.vacunas;
  }

  loadDesp() {
    this.parasitos = this.user.parasitos;
  }

  goToAdd() {
    this.navCtrl.push(AddVacunaPage);

  }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'Desde: ' + start + '<br> hasta: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }


}

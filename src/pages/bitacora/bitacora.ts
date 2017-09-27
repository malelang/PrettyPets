import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {VacunaDataProvider} from '../../providers/vacunas-data/vacunas-data';
import {Vacuna} from '../../providers/vacunas-data/vacuna';
import {ParasitoDataProvider} from '../../providers/vacunas-data/parasito-data';
import {Parasito} from '../../providers/vacunas-data/parasito';
import {AddVacunaPage} from '../add-vacuna/add-vacuna';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-bitacora',
  templateUrl: 'bitacora.html',
})
export class BitacoraPage {

  vacunas:Vacuna[];
  parasitos:Parasito[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: VacunaDataProvider, public service2: ParasitoDataProvider,
    private calendar: Calendar) {
      this.vacunas=service.data;
      this.parasitos=service2.data;
      this.calendar.createCalendar('MyCalendar').then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BitacoraPage');
  }

  goToAdd(){
    this.navCtrl.push(AddVacunaPage);
  }
}

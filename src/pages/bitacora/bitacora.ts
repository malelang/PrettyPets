import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {VacunaDataProvider} from '../../providers/vacunas-data/vacunas-data';
import {Vacuna} from '../../providers/vacunas-data/vacuna';
import {ParasitoDataProvider} from '../../providers/vacunas-data/parasito-data';
import {Parasito} from '../../providers/vacunas-data/parasito';
import {AddVacunaPage} from '../add-vacuna/add-vacuna';

import * as moment from 'moment';

@Component({
  selector: 'page-bitacora',
  templateUrl: 'bitacora.html',
})
export class BitacoraPage {

  vacunas:Vacuna[];
  parasitos:Parasito[];
  
  eventSource=[];
  viewTitle:string;
  selectedDay=new Date();
  calendar={
    mode: 'month',
    currentDate: this.selectedDay,
  }
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: VacunaDataProvider, public service2: ParasitoDataProvider,
    private modalCtrl:ModalController, private alertCtrl:AlertController) {
      this.vacunas=service.data;
      this.parasitos=service2.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BitacoraPage');
  }

  goToAdd(){
    this.navCtrl.push(AddVacunaPage);

  }

  addEvent(){
    let modal=this.modalCtrl.create('EventModalPage',{selectedDay: this.selectedDay});
    modal.present();

    modal.onDidDismiss(data=> {
      if(data){
        let eventData=data;
        eventData.startTime= new Date(data.startTime);
        eventData.endTime=new Date(data.endTime);

        let events=this.eventSource;
        events.push(eventData);
        this.eventSource=[];
        setTimeout(()=>{
          this.eventSource=events;
        });
      }
    });
  }

  onViewTitleChanged(title){
    this.viewTitle=title;
  }

  onTimeSelected(ev){
    this.selectedDay=ev.selectedTime;
  }

  onEventSelected(event){
    let start=moment(event.startTime).format('LLLL');
    let end=moment(event.endTime).format('LLLL');

    let alert=this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'Desde: '+ start + '<br> hasta: '+ end,
      buttons: ['OK']
    });
    alert.present();
  }
  

}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Vet} from '../../providers/vets-data/vet';
import {VeterinarioDataProvider} from '../../providers/vets-data/vets-data';
import { IonicPage } from 'ionic-angular';
import {AddVetPage} from '../add-vet/add-vet';
import {VetDaoProvider} from '../../providers/vets-data/vet-dao';

declare var google;

@IonicPage()
@Component({
  selector: 'page-vets',
  templateUrl: 'vets.html',
})
export class VetsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  veterinarios:Vet[]=[];
  vets:Vet[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public service: VeterinarioDataProvider,
  public dao: VetDaoProvider) {
    this.veterinarios=service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VetsPage');
    this.initMap();
  }

  loadVets(){
    this.dao.all().then(data=>this.vets=data);
  }

  goToAddVet(){
    this.navCtrl.push(AddVetPage);
  }

  ionViewDidEnter() {
    this.dao.ready()
      .then(() => this.loadVets());
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 14,
      center: {lat: 2.44, lng: -76.59}
    });
   

    var marker = new google.maps.Marker({
      position: {lat: 2.446821, lng: -76.607528},
      map: this.map,
      title: 'Pelos y patas'
    });

    var marker2 = new google.maps.Marker({
      position: {lat: 2.456445, lng:-76.595632},
      map: this.map,
      title: 'Cannis e Cattus'
    });

    var marker3 = new google.maps.Marker({
      position: {lat: 2.450865, lng:-76.605617},
      map: this.map,
      title: 'Mascotas Veterinaria'
    });

    var marker4 = new google.maps.Marker({
      position: {lat: 2.452565, lng:-76.605175},
      map: this.map,
      title: 'Animal Doctor'
    });

    var marker5 = new google.maps.Marker({
      position: {lat: 2.455112, lng:-76.592548},
      map: this.map,
      title: 'Colitas Spa y Veterinaria'
    });

    var marker6 = new google.maps.Marker({
      position: {lat: 2.481750, lng:-76.570782},
      map: this.map,
      title: 'Doctora Balcazar Veterinaria'
    });

  
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}

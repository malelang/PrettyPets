import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Vet} from '../../providers/vets-data/vet';
import {VeterinarioDataProvider} from '../../providers/vets-data/vets-data';
import { IonicPage } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public service: VeterinarioDataProvider) {
    this.veterinarios=service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VetsPage');
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 2.44, lng: -76.59}
    });

    this.directionsDisplay.setMap(this.map);
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

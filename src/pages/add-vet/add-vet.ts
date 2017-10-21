import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VetDaoProvider } from '../../providers/vets-data/vet-dao';
import { Vet } from '../../providers/vets-data/vet';

@Component({
  selector: 'page-add-vet',
  templateUrl: 'add-vet.html',
})
export class AddVetPage {

  veterinario: Vet;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dao: VetDaoProvider) {
    this.veterinario = new Vet();
  }

  save() {
    this.dao.insert(this.veterinario)
      .then(res => this.navCtrl.pop());
  }

}

import { Component } from '@angular/core';


import {PerfilPage} from '../perfil/perfil';
//import {Storage} from '@ionic/storage';
import {VetsPage} from '../vets/vets';
import {BitacoraPage} from '../bitacora/bitacora';
import {ForumPage} from '../forum/forum';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PerfilPage;
  tab2Root= BitacoraPage;
  tab3Root = VetsPage;
  tab4Root = ForumPage;
  

  constructor() {

  }
}

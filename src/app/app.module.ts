import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import { RegistroPage} from '../pages/registro/registro';
import {PerfilPage} from '../pages/perfil/perfil';
import {VetsPage} from '../pages/vets/vets';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import {BitacoraPage} from '../pages/bitacora/bitacora';
import {ForumPage } from '../pages/forum/forum';
import {AddMascotaPage} from '../pages/add-mascota/add-mascota';
import {AddVacunaPage} from '../pages/add-vacuna/add-vacuna';
import {UsuarioDataProvider} from '../providers/users-data/usuario-data';
import {MascotaDataProvider} from '../providers/mascota-data/mascota-data';
import {PerrosDataProvider} from '../providers/mascota-data/perros-data';
import {GatosDataProvider} from '../providers/mascota-data/gatos-data';
import {VeterinarioDataProvider} from '../providers/vets-data/vets-data';
import {VacunaDataProvider} from '../providers/vacunas-data/vacunas-data';
import {ParasitoDataProvider} from '../providers/vacunas-data/parasito-data';

@NgModule({
  declarations: [
    MyApp,
    
    TabsPage,
    LoginPage,
    RegistroPage,
    PerfilPage,
    VetsPage,
    BitacoraPage,
    ForumPage,
    AddMascotaPage,
    AddVacunaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    AboutPage,
//    ContactPage,
   
    TabsPage,
    LoginPage,
    RegistroPage,
    PerfilPage,
    VetsPage,
    BitacoraPage,
    ForumPage,
    AddMascotaPage,
    AddVacunaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioDataProvider,
    MascotaDataProvider,
    PerrosDataProvider,
    GatosDataProvider,
    VeterinarioDataProvider,
    VacunaDataProvider,
    ParasitoDataProvider,
  ]
})
export class AppModule {}

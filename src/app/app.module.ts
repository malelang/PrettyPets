import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';

//PAGES AND PROVIDERS
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import { RegistroPage} from '../pages/registro/registro';
import {PerfilPage} from '../pages/perfil/perfil';
import {VetsPage} from '../pages/vets/vets';
import {IonicStorageModule} from '@ionic/storage';
import {BitacoraPage} from '../pages/bitacora/bitacora';
import {ForumPage } from '../pages/forum/forum';
import {AddMascotaPage} from '../pages/add-mascota/add-mascota';
import {AddVacunaPage} from '../pages/add-vacuna/add-vacuna';
import {AddVetPage} from '../pages/add-vet/add-vet';

import {PerrosDataProvider} from '../providers/mascota-data/perros-data';
import {GatosDataProvider} from '../providers/mascota-data/gatos-data';
import {VeterinarioDataProvider} from '../providers/vets-data/vets-data';
import {VacunaDataProvider} from '../providers/vacunas-data/vacunas-data';
import {ParasitoDataProvider} from '../providers/vacunas-data/parasito-data';
import {VetDaoProvider} from '../providers/vets-data/vet-dao';
import {DatabaseConnectionProvider} from '../providers/database-connection/database-connection';
import {NgCalendarModule} from 'ionic2-calendar';

import { SaveDataProvider } from '../providers/save-data/save-data';
import { LoginServiceProvider } from '../providers/login-service/login-service';


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
    AddVetPage,
    
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp ),
    IonicStorageModule.forRoot(),
    HttpClientModule,
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
    AddVetPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PerrosDataProvider,
    GatosDataProvider,
    VeterinarioDataProvider,
    VacunaDataProvider,
    ParasitoDataProvider,
    DatabaseConnectionProvider,
    VetDaoProvider,
   
    SaveDataProvider,
    LoginServiceProvider,
  ]
})
export class AppModule {}

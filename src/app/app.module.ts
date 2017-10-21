import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

//PAGES
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import { RegistroPage} from '../pages/registro/registro';
import {PerfilPage} from '../pages/perfil/perfil';
import {VetsPage} from '../pages/vets/vets';
import {BitacoraPage} from '../pages/bitacora/bitacora';
import {ForumPage } from '../pages/forum/forum';
import {AddMascotaPage} from '../pages/add-mascota/add-mascota';
import {AddVacunaPage} from '../pages/add-vacuna/add-vacuna';
import {AddVetPage} from '../pages/add-vet/add-vet';
import {NewMascotaPage} from '../pages/new-mascota/new-mascota';
import {ConfigureUserPage} from '../pages/configure-user/configure-user';

//PROVIDERS
import {PerrosDataProvider} from '../providers/mascota-data/perros-data';
import {GatosDataProvider} from '../providers/mascota-data/gatos-data';
import {VeterinarioDataProvider} from '../providers/vets-data/vets-data';
import {VetDaoProvider} from '../providers/vets-data/vet-dao';
import {DatabaseConnectionProvider} from '../providers/database-connection/database-connection';
import {NgCalendarModule} from 'ionic2-calendar';
import { SaveDataProvider } from '../providers/save-data/save-data';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { NewpetServiceProvider } from '../providers/newpet-service/newpet-service';


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
    NewMascotaPage,
    ConfigureUserPage,
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
    NewMascotaPage,
    ConfigureUserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PerrosDataProvider,
    GatosDataProvider,
    VeterinarioDataProvider,
    DatabaseConnectionProvider,
    VetDaoProvider,
   
    SaveDataProvider,
    LoginServiceProvider,
    NewpetServiceProvider,
  ]
})
export class AppModule {}

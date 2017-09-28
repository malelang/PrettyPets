import { NgModule } from '@angular/core';
import { VetsPage} from './vets';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [VetsPage],
  imports: [IonicPageModule.forChild(VetsPage)],
  entryComponents: [VetsPage]
})
export class VetsPageModule { }
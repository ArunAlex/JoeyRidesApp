import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RooHomePage } from './driver-home';

@NgModule({
  declarations: [
    RooHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RooHomePage),
  ],
})
export class RooHomePageModule {}

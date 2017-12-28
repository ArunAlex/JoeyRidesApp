import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoeyHomePage } from './user-home';

@NgModule({
  declarations: [
    JoeyHomePage,
  ],
  imports: [
    IonicPageModule.forChild(JoeyHomePage),
  ],
})
export class JoeyHomePageModule {}

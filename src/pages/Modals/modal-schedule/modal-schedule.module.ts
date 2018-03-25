import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSchedulePage } from './modal-schedule';

@NgModule({
  declarations: [
    ModalSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSchedulePage),
  ],
})
export class ModalSchedulePageModule {}

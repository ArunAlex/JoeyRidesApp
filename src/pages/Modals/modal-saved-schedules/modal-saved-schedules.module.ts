import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSavedSchedulesPage } from './modal-saved-schedules';

@NgModule({
  declarations: [
    ModalSavedSchedulesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSavedSchedulesPage),
  ],
})
export class ModalSavedSchedulesPageModule {}

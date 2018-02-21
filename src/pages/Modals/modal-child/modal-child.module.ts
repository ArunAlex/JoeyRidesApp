import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalChildPage } from './modal-child';

@NgModule({
  declarations: [
    ModalChildPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalChildPage),
  ],
})
export class ModalChildPageModule {}

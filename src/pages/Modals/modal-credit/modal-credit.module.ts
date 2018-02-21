import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCreditPage } from './modal-credit';

@NgModule({
  declarations: [
    ModalCreditPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCreditPage),
  ],
})
export class ModalPaymentCreatePageModule {}

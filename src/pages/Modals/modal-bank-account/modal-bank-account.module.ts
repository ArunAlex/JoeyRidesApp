import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBankAccountPage } from './modal-bank-account';

@NgModule({
  declarations: [
    ModalBankAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalBankAccountPage),
  ],
})
export class ModalBankAccountPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { AuthServiceProvider } from '../../../providers/authService/authService';
import { DatabaseProvider } from '../../../providers/database/database';
import { StripeProvider } from '../../../providers/stripe/stripe';

import { RooHomePage } from '../../Roo/driver-home/driver-home';
import { ModalCreditPage } from '../../Modals/modal-credit/modal-credit';
import { ModalBankAccountPage } from '../../Modals/modal-bank-account/modal-bank-account';

import { User } from '../../../model/user';
import { Account } from '../../../model/account';

/**
 * Generated class for the DriverRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-driver-register',
  templateUrl: 'driver-register.html',
})
export class DriverRegisterPage {
  user = {} as User;
  account = {} as Account;
  section = "1" as any;

  constructor(private aService: AuthServiceProvider,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public stripe: StripeProvider) {
  }

  presentModal(type) {
    let modal;
    if (type === 'Credit') {
      modal = this.modalCtrl.create(ModalCreditPage);
    }
    else if (type === 'Bank') {
      modal = this.modalCtrl.create(ModalBankAccountPage);
    }
    modal.onDidDismiss(data => {
      this.account = data;
    });
    modal.present();
  }

  async register(user: User) {
    this.stripe.createTokenAsync(this.account)
      .then((token) => {
        user.token = token;
        this.aService.registerWithEmail(user)
          .then(() => {
            user.isJoey = false;
            var id = this.aService.authState.uid;
            this.database.addUser(user, id)
              .then((success) => {
                if (success) {
                  this.navCtrl.setRoot(RooHomePage);
                }
              });
          });
      });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
// import { Stripe } from '@ionic-native/stripe';

import { User } from '../../../model/user';

import { AuthServiceProvider } from '../../../providers/authService/authService';
import { StripeProvider } from '../../../providers/stripe/stripe'
import { DatabaseProvider } from '../../../providers/database/database';
import { JoeyHomePage } from '../../Joey/user-home/user-home';

import { ModalCreditPage } from '../../Modals/modal-credit/modal-credit';
import { ModalBankAccountPage } from '../../Modals/modal-bank-account/modal-bank-account';
import { ModalChildPage } from '../../Modals/modal-child/modal-child';
import { Child } from '../../../model/child';

/**
 * Generated class for the UserRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-register',
  templateUrl: 'user-register.html',
})
export class UserRegisterPage {
  user = {} as User;
  child = [] as Array<Child>;
  token = {} as any;
  section = "1" as any;

  constructor(private aService: AuthServiceProvider,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
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
    modal.onDidDismiss(token => {
      this.token = token;
    });
    modal.present();
  }


  presentModalChild() {
    let modal;

    modal = this.modalCtrl.create(ModalChildPage);

    modal.onDidDismiss(data => {
      this.child.push(data);
    });
    modal.present();
  }


  async register(user: User) {
    let loading = this.loadingCtrl.create({
      content: 'Loading..'
    });
    loading.present();
    user.child = this.child;
    user.token = this.token;
    this.aService.registerWithEmail(user)
      .then(() => {
        user.isJoey = true;
        var id = this.aService.authState.uid;
        this.database.addUser(user, id)
          .then((success) => {
            if (success) {
              loading.dismiss();
              this.navCtrl.setRoot(JoeyHomePage)
            }
          });
      });
  }
}

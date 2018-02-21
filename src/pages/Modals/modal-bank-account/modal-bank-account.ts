import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Account } from '../../../model/account';
import { StripeProvider } from '../../../providers/stripe/stripe';

/**
 * Generated class for the ModalBankAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-bank-account',
  templateUrl: 'modal-bank-account.html',
})
export class ModalBankAccountPage {
  account = {} as Account;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public stripe: StripeProvider,
    public loadingCtrl: LoadingController) {

  }

  onCloseModal(account: Account) {
    let loading = this.loadingCtrl.create({
      content: 'Loading..'
    });
    loading.present();
    account.type = 'bank';
    this.stripe.createTokenAsync(account)
      .then((token) => {
        loading.dismiss();
        this.viewCtrl.dismiss(token);
      });
  }
}

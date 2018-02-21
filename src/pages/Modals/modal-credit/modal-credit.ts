import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { StripeProvider } from '../../../providers/stripe/stripe';
import { Account } from '../../../model/account';
/**
 * Generated class for the ModalCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credit',
  templateUrl: 'modal-credit.html',
})
export class ModalCreditPage {
  account = {} as Account;
  card = {} as any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public stripe: StripeProvider,
    public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    this.card = this.stripe.createElements();
    this.card.mount('#card-element');

    this.card.addEventListener('change', function (event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
  }

  onCloseModal() {
    let loading = this.loadingCtrl.create({
      content: 'Loading..'
    });
    loading.present();
    this.account.type = 'credit';
    this.account.card = this.card;
    this.stripe.createTokenAsync(this.account)
      .then((token) => {
        loading.dismiss();
        this.viewCtrl.dismiss(token);
      });
  }
}

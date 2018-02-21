import { Injectable } from '@angular/core';
import { Account } from '../../model/account';

/*
  Generated class for the StripeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var Stripe;
@Injectable()
export class StripeProvider {
  stripe = {} as any;
  constructor() {
    this.stripe = Stripe('pk_test_tgChuwjKMEg57rnDJ5LFXSqW');
  }

  createElements() {
    var elements = this.stripe.elements();
    return elements.create('card');
  }

  async createTokenAsync(account: Account) {
    if (account.type === 'credit') {
      return this.stripe.createToken(account.card);
    }
    else {
      let bank_account = {
        country: 'US',
        currency: 'USD',
        account_holder_name: account.name,
        account_holder_type: 'individual',
        routing_number: account.bsb,
        account_number: account.number
      };

      return this.stripe.createToken('bank_account', bank_account);
    }
  }
}

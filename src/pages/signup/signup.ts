import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';

import { UserRegisterPage } from '../SignIn/user-register/user-register'
import { DriverRegisterPage } from '../SignIn/driver-register/driver-register'
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, private database: DatabaseProvider, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  openRegister() {
    this.navCtrl.push(UserRegisterPage);
  }

  openPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter Code',
      message: 'Please enter the code provided by JoeyRides',
      inputs: [{
          name: 'code',
          type: 'password'
        }
      ],
      buttons: [{
          text: 'No',
          role: 'cancel',
        },{
          text: 'Yes',
          handler: data => {
            this.database.isValidCode(data.code)
              .then((result) => {
                if (result) {
                  this.navCtrl.push(DriverRegisterPage);
                }
                else {
                  // invalid login
                  return false;
                }
              });
          }
        }
      ]
    });
    alert.present();
  }
}

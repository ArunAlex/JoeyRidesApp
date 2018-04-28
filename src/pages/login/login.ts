import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidatorProvider } from '../../providers/validators/validator'

import { User } from '../../model/user';
import { AuthServiceProvider } from '../../providers/authService/authService';
import { DatabaseProvider } from '../../providers/database/database';
import { JoeyHomePage } from '../Joey/user-home/user-home';
import { RooHomePage } from '../Roo/driver-home/driver-home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  user = {} as User;
  error: {code: string, message: string} = {code: '', message: ''};

  constructor(private aService: AuthServiceProvider,
    private database: DatabaseProvider,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public regexValidators: ValidatorProvider) {

    this.loginForm = this.formBuilder.group({
      email: [
        '', Validators.compose([
          // Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          // Validators.pattern(regexValidators.password),
          Validators.required
        ])
      ]
    })
  }

  async login(user: User) {
    let loading = this.loadingCtrl.create({
      content: 'Loading..'
    });
    loading.present();
    this.aService.loginWithEmail(user.email, user.password)
      .then(() => {
        var uid = this.aService.authState.uid;
        this.database.getUserById(uid)
          .then((data) => {
            loading.dismiss();
            if (data.isJoey) {
              this.navCtrl.setRoot(JoeyHomePage);
            }
            else {
              this.navCtrl.setRoot(RooHomePage);
            }
          })
      })
      .catch((error) => {
        loading.dismiss();
        this.error = error;
      });
  }
}

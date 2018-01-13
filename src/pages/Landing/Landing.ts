import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'Landing.html'
})
export class HomePage {
  login = LoginPage;
  signup = SignupPage;
  constructor(public navCtrl: NavController) {

  }

}

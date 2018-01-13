import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  activeSection = 1 as number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changeSection(i){
    this.activeSection = i;
  }
}

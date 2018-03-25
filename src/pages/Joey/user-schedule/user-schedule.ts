import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalSchedulePage } from '../../Modals/modal-schedule/modal-schedule';

/**
 * Generated class for the UserSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-schedule',
  templateUrl: 'user-schedule.html',
})
export class UserSchedulePage {
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  addEvent() {
    let modal = this.modalCtrl.create(ModalSchedulePage);
    modal.onDidDismiss(data => {
      console.log('closed schedule');
    });
    modal.present();
  }
}

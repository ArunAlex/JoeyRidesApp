import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalSchedulePage } from '../modal-schedule/modal-schedule';

/**
 * Generated class for the ModalSavedSchedulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-saved-schedules',
  templateUrl: 'modal-saved-schedules.html',
})
export class ModalSavedSchedulesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSavedSchedulesPage');
  }

  addTrip() {
    this.navCtrl.push(ModalSchedulePage);
  }

  ids = 5;
  data = [{
    id: 1,
    title: 'Trip Name 1',
    pickupLocation: 'Unit 1, 2 Orange Grove, Castle Hill',
    dropoffLocation: 'Les Shore Place, Castle Hill',
    ReturnTrip: 'No',
    Joeys: 'Issable, Neil'
  }, {
    id: 2,
    title: 'Trip Name 2',
    pickupLocation: 'dsfds',
    dropoffLocation: 'Les Shore Place, Castle Hill',
    ReturnTrip: 'Yes',
    Joeys: 'Luke, Neil'
  }, {
    id: 3,
    title: 'Trip Name 3',
    pickupLocation: 'ewrew',
    dropoffLocation: 'Les Shore Place, Castle Hill',
    ReturnTrip: 'No',
    Joeys: 'Neil'
  }, {
    id: 4,
    title: 'Trip Name 4',
    pickupLocation: 'sdfgdf',
    dropoffLocation: 'Les Shore Place, Castle Hill',
    ReturnTrip: 'No',
    Joeys: 'Issable'
  }, {
    id: 5,
    title: 'Trip Name 5',
    pickupLocation: 'dfgfg',
    dropoffLocation: 'Les Shore Place, Castle Hill',
    ReturnTrip: 'Yes',
    Joeys: 'Neil, Mutazz, Ashwin'
  }];

}

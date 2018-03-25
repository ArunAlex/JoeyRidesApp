import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, LoadingController, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/database/database';
import { AuthServiceProvider } from '../../../providers/authService/authService';

import { mobiscroll } from '@mobiscroll/angular-trial';
import { Schedule } from '../../../model/schedule';
/**
 * Generated class for the ModalSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let now = new Date(),
  week = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6, 23, 59)];
declare var google;
@IonicPage()
@Component({
  selector: 'page-modal-schedule',
  templateUrl: 'modal-schedule.html',
})
export class ModalSchedulePage {
  autocompletePickup: any;
  autocompleteDropOff: any;
  schedule = {} as Schedule;
  children = [] as any;
  [x: string]: any;

  compact: Date;
  select: any = [2, 3];
  selectReminder: any = [10];
  date: Array<Date>;
  h24: Date = now;
  demo: Array<Date> = week;

  @ViewChild(Navbar) navBar: Navbar;

  compSettings: any = {

    display: 'bottom',
    dateWheels: '|D M d|'
  };

  selectSettings: any = {

    display: 'bottom',
    select: 'multiple'
  };

  selectReminderSettings: any = {

    display: 'bottom'
  };

  dateSettings: any = {

    display: 'bottom',
    startInput: '#startDate',
    endInput: '#endDate',
    controls: ['date']
  };
  nonFormSettings: any = {

    display: 'bottom'
  };

  h24Settings: any = {

    display: 'bottom',
    timeFormat: 'HH:ii'
  };

  demoSettings: any = {

    display: 'bottom',
    controls: ['calendar', 'time'],
    startInput: '#startDate',
    endInput: '#endDate'
  };


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private database: DatabaseProvider,
    private loadingCtrl: LoadingController) {
    var self = this;
    this.database.getKidsById(this.authService.authState.uid)
      .then((data) => {
        data.forEach(element => {
          self.children.push({ value: element.name, text: element.name });
        });
      })
  }


  ionViewDidLoad() {
    var inputElement1 = document.getElementById("autocompletePickUp").getElementsByTagName("input")[0];
    this.autocompletePickup = new google.maps.places.Autocomplete(inputElement1,
      { types: ['geocode'] });
    this.autocompletePickup.addListener('place_changed', this.fillInAddress1);

    var inputElement2 = document.getElementById("autocompleteDropOff").getElementsByTagName("input")[0];
    this.autocompleteDropOff = new google.maps.places.Autocomplete(inputElement2,
      { types: ['geocode'] });
    this.autocompleteDropOff.addListener('place_changed', this.fillInAddress2);
  }


  fillInAddress1() {
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };
    var inputElement = document.getElementById("autocompletePickUp").getElementsByTagName("input")[0];
    var place = this.getPlace();
    var val = '';
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      var value = place.address_components[i][componentForm[addressType]];
      if (value) {
        if (val == '') {
            val = value;
        }
        else {
          val += (addressType == 'country' || addressType == 'postal_code' ? ', ' : ' ') + value;
        }
      }
    }
    inputElement.value = val;
  }


  fillInAddress2() {
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };
    var inputElement = document.getElementById("autocompleteDropOff").getElementsByTagName("input")[0];
    var place = this.getPlace();
    var val = '';
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      var value = place.address_components[i][componentForm[addressType]];
      if (value) {
        if (val == '') {
            val = value;
        }
        else {
          val += (addressType == 'country' || addressType == 'postal_code' ? ', ' : ' ') + value;
        }
      }
    }
    inputElement.value = val;
  }


  showConfirm = () => {
    mobiscroll.confirm({
      title: 'Trip Name',
      message:
        '<b>Estimated Cost of Trip:</b>' + '$12.00' +
        '<br\>' +
        '<br\>' +
        '<b>Pickup Start:</b>' + '09/03/2019 07:30 AM' +
        '<br\>' +
        '<b>Drop-off End:</b>' + '09/03/2019 04:30 PM' +
        '<br\>' +
        '<b>Pick-up Location:</b>' + 'Unit 1, 2 Orange Grove, Castle Hill, NSW' +
        '<br\>' +
        '<b>Drop-off Location:</b>' + '24 Les Shore Place, Castle Hill, NSW' +
        '<br\>' +
        '<b>Roos:</b>' + 'Isabella and Neil',
      okText: 'Agree',
      cancelText: 'Disagree',
      callback: (res) => {
        console.log('Function Called');
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
          enableBackdropDismiss: true
        });
        loader.present();
        setTimeout(() => {
          //this.navCtrl.push(ScheduleBooked);
        }, 5000);

        setTimeout(() => {
          loader.dismiss();
        }, 5000);

      }
    });
  }

}

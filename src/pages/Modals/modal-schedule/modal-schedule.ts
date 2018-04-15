import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, LoadingController, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/database/database';
import { AuthServiceProvider } from '../../../providers/authService/authService';

import { mobiscroll, MbscRangeOptions } from '../../../lib/mobiscroll/js/mobiscroll.custom-4.1.1.min';
import { Schedule } from '../../../model/schedule';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserSchedulePage } from '../../Joey/user-schedule/user-schedule';
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

  nonFormSettings: any = {

    display: 'bottom',
    controls: ['date']
  };

  h24Settings: any = {

    display: 'bottom',
    timeFormat: 'HH:ii'
  };

  rangeSettings: MbscRangeOptions = {
    display: 'bottom',
    startInput: '#start',
    endInput: '#end'
  };

  nonTimePickUpFormSettings: any = {
    display: 'bottom',
    controls: ['time'],
    steps: {
      minute: 15
    }
  };

  nonTimeDropoffFormSettings: any = {
    display: 'bottom',
    controls: ['time'],
    steps: {
      minute: 15
    }
  };

  nonDateFormSettings: MbscRangeOptions = {
    display: 'bottom'
  };


  scheduleForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private database: DatabaseProvider,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder) {

    this.scheduleForm = this.formBuilder.group({
      titlename: ['', [Validators.required, Validators.minLength(2)]],
      locationPickUp: ['', Validators.required],
      locationDropoff: ['', Validators.required],
      startEndDate: ['', Validators.required],
      pickupTime: ['', Validators.required]
    });

    var self = this;
    self.database.getKidsById(self.authService.authState.uid)
      .then((data) => {
        data.forEach(element => {
          self.children.push({ value: element.name, text: element.name });
        });
      });
  }

  ionViewDidLoad() {
    var inputElement1 = document.getElementsByName("locationPickUp")[0].getElementsByTagName("input")[0];
    this.autocompletePickup = new google.maps.places.Autocomplete(inputElement1,
      { types: ['geocode'] });
    this.autocompletePickup.addListener('place_changed', this.fillInAddress.bind(this.autocompletePickup, inputElement1, this.schedule.locationPickUp));

    var inputElement2 = document.getElementsByName("locationDropoff")[0].getElementsByTagName("input")[0];
    this.autocompleteDropOff = new google.maps.places.Autocomplete(inputElement2,
      { types: ['geocode'] });
    this.autocompleteDropOff.addListener('place_changed', this.fillInAddress.bind(this.autocompleteDropOff, inputElement2, this.schedule.locationDropOff));
  }

  fillInAddress(input, location) {
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };
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
    input.value = location = val;
  }

  getErrorMessage(field: string) {
    var message = '';
    var ctrl = this.scheduleForm.get(field);
    if (ctrl && ctrl.errors) {
      for (var err in ctrl.errors) {
        if (!message && ctrl.errors[err]) {
          message = this.errorMessages[field][err];
        }
      }
    }
    return message;
  }

  showConfirm() {
    var self = this;
    mobiscroll.confirm({
      title: 'Confirm Trip Name',
      message:
        '<b>Estimated Cost of Trip:</b>' + '$12.00' +
        '<br\>' +
        '<br\>' +
        '<b>Pickup Time Range:</b>' + self.schedule.pickupTime[0] + '-' + self.schedule.pickupTime[1] +
        '<br\>' +
        '<b>Pick-up Location:</b>' + self.schedule.locationPickUp +
        '<br\>' +
        '<b>Drop-off Location:</b>' + self.schedule.locationDropOff +
        '<br\>' +
        '<b>Kids:</b>' + self.schedule.kids,
      okText: 'Agree',
      cancelText: 'Disagree',
      callback: (res) => {
        if (res == true) {
          let loader = this.loadingCtrl.create({
            content: "Please wait...",
            enableBackdropDismiss: true
          });
          loader.present();
          self.database.addSchedule(this.schedule, self.authService.authState.uid)
            .then(() => {
              loader.dismiss();
              mobiscroll.toast({
                message: 'Trip Request Posted. Your trip will be confirmed in 30mins'
              });
              this.navCtrl.pop();
            })
            .catch(() => {

            });
        }
        else {
          this.navCtrl.pop();
        }
      }
    });
  }

  errorMessages = {
    titlename: {
      required: 'Title required',
      minlength: 'Has to be at least 2 characters'
    },
    locationPickUp: {
      required: 'Pickup Location required'
    },
    locationDropoff: {
      required: 'Drop-off Location required'
    },
    startEndDate: {
      required: 'From Date required'
    },
    pickupTime: {
      required: 'Pick-Up Time required'
    },
    kids: {
      required: 'Add atleast one kid'
    }
  }

}

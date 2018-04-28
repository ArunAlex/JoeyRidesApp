import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ModalSchedulePage } from '../../Modals/modal-schedule/modal-schedule';
import { ModalSavedSchedulesPage } from '../../Modals/modal-saved-schedules/modal-saved-schedules'
import { AuthServiceProvider } from '../../../providers/authService/authService';
import { DatabaseProvider } from '../../../providers/database/database';

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
  data = [] as any;
  events = [] as any;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private authService: AuthServiceProvider,
    private database: DatabaseProvider) {
    var self = this;
    self.database.getSchedules(self.authService.authState.uid)
      .then((data) => {
        data.forEach(element => {
          self.data.push({
            title: element.title,
            startDate: element.startAndEndDate[0].toDateString(),
            endDate: element.startAndEndDate[1].toDateString(),
            status: 'Pending'
          });
          self.events.push({
            start: new Date(element.startAndEndDate[0].getFullYear(), element.startAndEndDate[0].getMonth(), element.startAndEndDate[0].getDate()),
            end: new Date(element.startAndEndDate[1].getFullYear(), element.startAndEndDate[1].getMonth(), element.startAndEndDate[1].getDate()),
            text: element.title
          });
        });
      });
  }

  listviewSettings: any = {
    theme: 'material',
    sortable: true,
    iconSlide: true,
    striped: true,
    stages: [{
      percent: 25,
      color: 'crimson',
      icon: 'checkmark',
      text: 'Complete',
      action: (event, inst) => {
        this.data[event.index].status = 'Pending';
      }
    }, {
      percent: -50,
      color: 'red',
      icon: 'remove',
      text: 'Delete',
      confirm: true,
      action: (event, inst) => {
        this.data.splice(event.index, 1);
        return false;
      }
    }, {
      percent: -25,
      color: 'olive',
      icon: 'clock',
      text: 'Pending',
      action: (event, inst) => {
        this.data[event.index].status = 'Pending';
      }
    }]
  };


  addEvent() {
    var self = this;
    let modal = this.modalCtrl.create(ModalSchedulePage);
    modal.onDidDismiss(data => {
      self.database.getSchedules(self.authService.authState.uid)
        .then((data) => {
          self.data = [];
          data.forEach(element => {
            self.data.push({
              title: element.title,
              startDate: element.startAndEndDate[0].toDateString(),
              endDate: element.startAndEndDate[1].toDateString(),
              status: 'Pending'
            });
            self.events.push({
              start: new Date(element.startAndEndDate[0].getFullYear(), element.startAndEndDate[0].getMonth(), element.startAndEndDate[0].getDate()),
              end: new Date(element.startAndEndDate[1].getFullYear(), element.startAndEndDate[1].getMonth(), element.startAndEndDate[1].getDate()),
              text: element.title
            });
          });
        });
      console.log('closed schedule');
    });
    modal.present();
  }

  savedTrips() {
    let modal = this.modalCtrl.create(ModalSavedSchedulesPage);
    modal.onDidDismiss(data => {
      console.log('closed schedule');
    });
    modal.present();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: 'New Trip',
        role: 'NewTrip',
        handler: () => {
          console.log('New Trip clicked');
          this.addEvent();
        }
      }, {
        text: 'Saved Trip',
        handler: () => {
          console.log('Save Trip clicked');
          this.savedTrips();
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionSheet.present();
  }
}

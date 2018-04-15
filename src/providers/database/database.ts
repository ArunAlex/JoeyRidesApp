import { Injectable } from '@angular/core';

import { User } from '../../model/user';
import { Schedule } from '../../model/schedule';
import { Child } from '../../model/child';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


// We MUST import both the firebase AND firestore modules like so
import * as firebase from 'firebase';
import 'firebase/firestore';


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  _DB: any;
  userCollection: AngularFirestoreCollection<User>;
  childCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;

  count: number;


  constructor(afs: AngularFirestore) {
    this.userCollection = afs.collection('Users');
    this._DB = firebase.firestore();
  }

  ngOnInit() {
  }

  async isValidCode(code) {
    //get from firebase database
    return true;
  }

  async getUserById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._DB
        .collection('Users')
        .doc(id)
        .get()
        .then((snapshot) => {
          resolve(snapshot.data());
        });
    });
  }

  async getKidsById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._DB
        .collection('Users')
        .doc(id)
        .collection('Kids')
        .get()
        .then((snapshot) => {
          let child: Array<Child>;
          child = [];
          snapshot
            .forEach((doc: any) => {
              child.push(doc.data());
            });
          resolve(child);
        });
    });
  }

  async getSchedules(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._DB
        .collection('Users')
        .doc(id)
        .collection('Schedules')
        .get()
        .then((snapshot) => {
          let schedules: Array<Schedule>;
          schedules = [];
          snapshot
            .forEach((doc: any) => {
              schedules.push(doc.data());
            });
          resolve(schedules);
        });
    });
  }

  async addSchedule(schedule: Schedule, id: string) {
    return this.userCollection
      .doc(id).collection('Schedules')
      .doc('Schedule' + id + schedule.title)
      .set({
        title: schedule.title,
        pickupLocation: schedule.locationPickUp,
        dropoffLocation: schedule.locationDropOff,
        startAndEndDate: schedule.startEndDate,
        pickupTime: schedule.pickupTime,
        returnTime: schedule.returnTime,
        kids: schedule.kids
      });
  }

  async addUser(user: User, id: string) {
    return this.userCollection
      .doc(id)
      .set({
        name: user.name,
        address: user.address,
        email: user.email,
        password: user.password,
        isJoey: user.isJoey
      }).then(() => {
        this.count = 0;
        user.child.forEach((c) => {
          this.userCollection
            .doc(id).collection('Kids')
            .doc('Kids' + id + this.count)
            .set({
              name: c.fullname
            }).catch(() => {
              return false;
            });
          ++this.count;
        });
        return true;
      }).catch(() => {
        return false;
      });
  }
}

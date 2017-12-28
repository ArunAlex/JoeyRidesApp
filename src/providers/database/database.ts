import { Injectable } from '@angular/core';

import { User } from '../../model/user';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  joeyItemsCollection: AngularFirestoreCollection<User>; //Firestore collection
  rooItemsCollection: AngularFirestoreCollection<User>; //Firestore collection
  items: Observable<User[]>; // read collection

  constructor(private afs: AngularFirestore) {
    this.joeyItemsCollection = this.afs.collection('joeys'); //ref()\
    this.rooItemsCollection = this.afs.collection('roos'); //ref()
  }

}

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
  // joeyItemsCollection: AngularFirestoreCollection<User>; //Firestore collection
  // rooItemsCollection: AngularFirestoreCollection<User>; //Firestore collection
  // items: Observable<User[]>; // read collection
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  

  constructor(private afs: AngularFirestore) {
    // this.joeyItemsCollection = this.afs.collection('Users');// ref => ref.where('isJoey','==','true')
    // this.items = this.joeyItemsCollection.snapshotChanges().map(changes => {
    //   return  changes.map(a=>{
    //     const data = a.payload.doc.data() as User;
    //     const id = a.payload.doc.id;
    //     return {id, ...data};
    //   });
    // });
  }

  ngOnInit() {
  }

  async getUserById(id: string) {
    this.userDoc = this.afs.doc('Users/'+ id);
    this.user = this.userDoc.valueChanges();
  }
}

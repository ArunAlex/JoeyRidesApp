import { Injectable } from '@angular/core';

import { User } from '../../model/user';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  userCollection: AngularFirestoreCollection<User>;
  childCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  count: number;


  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('Users');// ref => ref.where('isJoey','==','true')
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

  async isValidCode(code) {
    //get from firebase database
    return true;
  }

  async getUserById(id: string) {
    this.userDoc = this.afs.doc('Users/' + id);
    this.user = this.userDoc.valueChanges();
  }

  async addUser(user: User, id: string) {
    return this.userCollection.doc(id)
      .set({
        name: user.name,
        address: user.address,
        email: user.email,
        password: user.password,
        isJoey: user.isJoey
      }).then(() => {
        this.count = 0;
        user.child.forEach((c) => {
          this.userCollection.doc(id).collection('Kids').doc('Kids' + id + this.count)
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

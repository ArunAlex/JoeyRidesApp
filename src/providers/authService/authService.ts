import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseProvider } from '../database/database';
import { User } from '../../model/user';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  authState: any = null;
  constructor(private afAuth: AngularFireAuth, private database: DatabaseProvider) {

  }

  async registerWithEmail(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        this.authState = user;
      });
  }

  async loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error)
        throw error;
      });
  }

  async logout() {
    return this.afAuth.auth.signOut()
      .then(() => {
        this.authState = null;
        this.database.user = null;
        this.database.userDoc = null;
      })
      .catch(error => {
        console.log(error)
        throw error;
      });
  }
}

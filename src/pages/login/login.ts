import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';


import { AuthServiceProvider } from '../../providers/authService/authService';
import { DatabaseProvider } from '../../providers/database/database';
import { JoeyHomePage } from '../Joey/user-home/user-home';
import { RooHomePage } from '../Roo/driver-home/driver-home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private aService: AuthServiceProvider, private database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
      this.aService.loginWithEmail(user.email, user.password)
        .then(()=>{
            var uid = this.aService.authState.uid;
            var rooRef = this.database.rooItemsCollection.ref.where('uid','==', uid);
            var joeyRef = this.database.joeyItemsCollection.ref.where('uid','==', uid);
            rooRef.get()
            .then((result) => {
              if(result.docs.length == 0){
                joeyRef.get()
                .then((result) =>{
                  if(!result){
                    //throw error
                  }
                  else{
                    this.navCtrl.setRoot(JoeyHomePage);
                  }
                })
              } 
              else{
                this.navCtrl.setRoot(RooHomePage);
              } 
            });
        });
  }
}

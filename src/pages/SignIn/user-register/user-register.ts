import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../../model/user';

import { AuthServiceProvider } from '../../../providers/authService/authService';
import { DatabaseProvider } from '../../../providers/database/database';
import { JoeyHomePage } from '../../Joey/user-home/user-home';

/**
 * Generated class for the UserRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-register',
  templateUrl: 'user-register.html',
})
export class UserRegisterPage {
  user = {} as User;
  section = "1" as any;

  constructor(private aService: AuthServiceProvider, private database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

 async register(user: User){
    this.aService.registerWithEmail(user)
    .then((authuser)=>{
      user.isJoey = true;
      var id = this.aService.authState.uid;
      this.database.addUser(user, id)
      .then((success)=>{
          if(success){
            this.navCtrl.setRoot(JoeyHomePage)
          }
      });
    });
  }
}

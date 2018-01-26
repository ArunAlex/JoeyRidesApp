import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../model/user';
import { AuthServiceProvider } from '../../../providers/authService/authService';
import { DatabaseProvider } from '../../../providers/database/database';
import { RooHomePage } from '../../Roo/driver-home/driver-home';

/**
 * Generated class for the DriverRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-register',
  templateUrl: 'driver-register.html',
})
export class DriverRegisterPage {
  user = {} as User;
  section = "1" as any;

  constructor(private aService: AuthServiceProvider, private database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    this.aService.registerWithEmail(user)
    .then(()=>{
      user.isJoey = false;
      var id = this.aService.authState.uid;
      this.database.addUser(user, id)
       .then((success)=>{
          if(success){
            this.navCtrl.setRoot(RooHomePage);
          }
      });
    });
  }
}

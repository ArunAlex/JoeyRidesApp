import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/Landing/Landing';
import { FareEstimatorPage } from '../pages/Joey/fare-estimator/fare-estimator';
import { UserSchedulePage } from '../pages/Joey/user-schedule/user-schedule';

import { AuthServiceProvider } from '../providers/authService/authService';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private aService: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Fare Estimator', component: FareEstimatorPage },
      { title: 'Schedule', component: UserSchedulePage },
      { title: 'Logout', component: null }
    ];
  }

  openPage(page) {
    if(page.component) {
      this.nav.setRoot(page.component);
    }
    else {
      this.aService.logout();
      this.nav.setRoot(HomePage);
    }
  }
}


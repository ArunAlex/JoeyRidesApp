import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/Landing/Landing';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { JoeyHomePage } from '../pages/Joey/user-home/user-home';
import { RooHomePage } from '../pages/Roo/driver-home/driver-home';
import { UserRegisterPage } from '../pages/SignIn/user-register/user-register';
import { DriverRegisterPage } from '../pages/SignIn/driver-register/driver-register';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { AuthServiceProvider } from '../providers/authService/authService';
import { DatabaseProvider } from '../providers/database/database';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    JoeyHomePage,
    RooHomePage,
    UserRegisterPage,
    DriverRegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    JoeyHomePage,
    RooHomePage,
    UserRegisterPage,
    DriverRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DatabaseProvider,
    GoogleMaps,
    Geolocation
  ]
})
export class AppModule {}

import { MbscModule } from '@mobiscroll/angular-trial';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Stripe } from '@ionic-native/stripe';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { CalendarModule } from 'ionic3-calendar-en';

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
import { UserSchedulePage } from '../pages/Joey/user-schedule/user-schedule';

import { ModalCreditPage } from '../pages/Modals/modal-credit/modal-credit';
import { ModalBankAccountPage } from '../pages/Modals/modal-bank-account/modal-bank-account';
import { ModalChildPage } from '../pages/Modals/modal-child/modal-child';
import { ModalSchedulePage } from '../pages/Modals/modal-schedule/modal-schedule';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { AuthServiceProvider } from '../providers/authService/authService';
import { DatabaseProvider } from '../providers/database/database';
import { ValidatorProvider } from '../providers/validators/validator';
import { StripeProvider } from '../providers/stripe/stripe';
import { ModalSchedulePageModule } from '../pages/Modals/modal-schedule/modal-schedule.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    JoeyHomePage,
    RooHomePage,
    UserRegisterPage,
    DriverRegisterPage,
    UserSchedulePage,
    ModalCreditPage,
    ModalBankAccountPage,
    ModalChildPage,
    ModalSchedulePage
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    CalendarModule
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
    DriverRegisterPage,
    UserSchedulePage,
    ModalCreditPage,
    ModalBankAccountPage,
    ModalChildPage,
    ModalSchedulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    DatabaseProvider,
    GoogleMaps,
    Geolocation,
    Stripe,
    ValidatorProvider,
    StripeProvider
  ]
})
export class AppModule { }

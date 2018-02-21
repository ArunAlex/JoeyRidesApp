import { Injectable } from '@angular/core';
/*
  Generated class for the ValidatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidatorProvider {
  email: any;
  password: any;
  name: any;
  phoneNumber: any;

  constructor() {
    this.email = '[^\S+@\S+$]';
    this.password = '[[A-Za-z\d]{8,}$]';
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Child } from '../../../model/child';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ModalChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-child',
  templateUrl: 'modal-child.html',
})
export class ModalChildPage {
  child = {} as Child
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  addChild(child: Child) {
    this.viewCtrl.dismiss(child);
  }
}

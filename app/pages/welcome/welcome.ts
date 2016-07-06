import {Component} from '@angular/core';
import {Modal, NavController, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/welcome/welcome.html'
})
export class WelcomePage {
  constructor(private viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}
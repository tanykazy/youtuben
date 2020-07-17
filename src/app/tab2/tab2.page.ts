import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  hello(){
    console.log("Hello");
  }

  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];
  constructor(public navCtrl: NavController) {
  }
  public form = [
    { val: 'フォニックス ', isChecked: true },
    { val: '音声学', isChecked: true },
    { val: 'Nas English', isChecked: false }
  ];



}

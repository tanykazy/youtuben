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
  for(let i = 0; i < 10; i++ ){
      this.data.push({
        title: 'Title '+i,
        details: 'The link to the video',
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
    }
  }
  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'add-outline';
    } else {
      data.showDetails = true;
      data.icon = 'ios-remove-circle-outline';
    }
  }

}

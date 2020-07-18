import {Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

import {captions} from '../utils/getYoutubeCaptionEnglish'
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  // プロパティ一覧
  title = "Practice"
  videoId: string = "p13eKmDz88g";
  captions = "";
  captionFlag = true;
  videoSources: Plyr.Source[] = [
    {
      src: 'p13eKmDz88g',
      provider: 'youtube',
    },
  ];

  @ViewChild(PlyrComponent) plyr: PlyrComponent;
  
  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }
  
  play(): void {
    this.plyr.player.play()
  }  
 
  clickPlay() {
    this.plyr.player.play()
  }

　// 指定の時間に移動する　
  moveToTime(time){
    var seconds = Number(time.split(":")[0]*60) + Number(time.split(":")[1]) + Number(0.100000000000111)
    this.plyr.player.currentTime = 0;
    this.plyr.player.currentTime = seconds;
    this.plyr.player.play();
  }

  changeCaption(){
    if(this.captionFlag == true){
      this.captionFlag = false;
      console.log(this.captionFlag);
    }else if(this.captionFlag == false){
      this.captionFlag = true;
      console.log(this.captionFlag);
    }
  }

  checkCaptionFlag(){
    return this.captionFlag;
  }

  getsSpeed100(){
    this.plyr.player.speed = 1;
    this.plyr.player.play();

  }

  getsSpeed50(){
    this.plyr.player.play();
    this.plyr.player.speed = 0.5;
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.captions = captions;

    console.log(captions);
  }

}
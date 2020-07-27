import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { PlyrComponent } from 'ngx-plyr';
import { GetCaptionService } from '../services/get-caption.service';

//import { RecordCountService } from '../services/record-count.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private getCaptionService: GetCaptionService) {}
  // プロパティ一覧
  title = 'Practice';

  videoBank = ['eIho2S0ZahI', 'R1vskiVDwl4', 'F6ehyV7kqv8', 
               'O_9TgmIg1nA', 'aH--sKPgbSE', 'A3Yj3q0QRLM'];

  videoId = this.videoBank[ Math.floor( Math.random() * this.videoBank.length)];

  captions = [];
  captionFlag = true;
  videoSources: Plyr.Source[] = [
    {
      src: this.videoId,
      provider: 'youtube',
    },
  ];

  @ViewChild(PlyrComponent) plyr: PlyrComponent;

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play() {
    this.plyr.player.play();
  }

  clickPlay() {
    this.plyr.player.play();
  } // 指定の時間に移動する

  moveToTime(time) {
    const seconds =
      Number(time.split(':')[0] * 60) +
      Number(time.split(':')[1]) +
      Number(0.100000000000111);
    this.plyr.player.currentTime = 0;
    this.plyr.player.currentTime = seconds;
    this.plyr.player.play();
  }

  changeCaption() {
    if (this.captionFlag === true) {
      this.captionFlag = false;
      console.log(this.captionFlag);
    } else if (this.captionFlag === false) {
      this.captionFlag = true;
      console.log(this.captionFlag);
    }
  }

  checkCaptionFlag() {
    return this.captionFlag;
  }

  getsSpeed100() {
    this.plyr.player.speed = 1;
    this.plyr.player.play();
  }

  getsSpeed50() {
    this.plyr.player.play();
    this.plyr.player.speed = 0.5;
  }

  async ngOnInit() {
    this.captions = await Promise.all([
      this.getCaptionService.loadYoutubeSubTitlesAsync({
        languageId: 'en',
        videoId: this.videoId,
      }),
      this.getCaptionService.loadYoutubeSubTitlesAsync({
        languageId: 'ja',
        videoId: this.videoId,
      }),
    ]);
  }
}

import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Router,NavigationEnd } from '@angular/router';

import { PlyrComponent } from 'ngx-plyr';

// Service
import { GetCaptionService } from '../services/get-caption.service';
import { RecordCountService } from '../services/record-count.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(
    private getCaptionService: GetCaptionService,
    private recordCountService: RecordCountService,
    private router: Router,
    ){
      
    }

  title = 'Practice';

  videoBank;
  videoIds = JSON.parse(localStorage.getItem('videoIds'));
  videoId = this.videoIds[Math.floor( Math.random() * this.videoIds.length)];

  captions = [];
  currentCaptions: Array<any>;
  captionIndex = 0;
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
    console.log(this.plyr.player.hasAudio);
    console.log(this.plyr.player.increaseVolume(1));
  }

  play() {
    this.plyr.player.play();
  }

  loadNewMovie(event: Plyr.PlyrEvent){
    console.log(this.plyr.player.source);
  }

  clickPlay() {
    this.plyr.player.play();
  } 
  
  clickCaption(event) {
    const seconds =
      Number(event.split(':')[0] * 60) +
      Number(event.split(':')[1]) +
      Number(0.00000000111);
    this.moveToTime(seconds);
    this.recordCountService.addCount();
    this.recordCountService.saveRecord();
  }

  moveToTime(seconds) {
    this.plyr.player.currentTime = 0;
    this.plyr.player.currentTime = seconds;
    this.plyr.player.play();
  }

  changeCaption() {
    this.captionIndex = this.captionIndex + 1;
    this.captionIndex = this.captionIndex % this.captions.length;
    this.currentCaptions = this.captions[this.captionIndex];
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

  async InitPracticePage(){
    this.recordCountService.loadRecord();
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
    this.captionIndex = 0;
    this.currentCaptions = this.captions[this.captionIndex];

    // restart
    //this.plyr.player.restart();
  }

  

  async ngOnInit() {
    this.InitPracticePage();
  }
}

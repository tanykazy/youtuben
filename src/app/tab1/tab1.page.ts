import {Component, OnInit, ViewChild} from '@angular/core';
import {YouTubePlayer} from '@angular/youtube-player';

import {captions} from '../utils/getYoutubeCaptionEnglish'


import { NavController } from '@ionic/angular';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;
 
  videoSources: Plyr.Source[] = [
    {
      src: 'p13eKmDz88g',
      provider: 'youtube',
    },
  ];
  
  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }
  
  play(): void {
    //this.player.play(); // or this.plyr.player.play()
    this.plyr.player.play()
  }  


  title = "Practice"
  videoId: string = "p13eKmDz88g";

  captions = "";

  pointA = 0;
  pointB = 0;

  captionFlag = true;

  public items: Array<any>;
 
  @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;

  clickPlay() {
  //  this.youtubePlayer.playVideo();
    this.plyr.player.play()
  }

  clickPause() {
    this.youtubePlayer.pauseVideo();
  }

  clickStop() {    
    this.youtubePlayer.stopVideo();
  }

  setA() {
    console.log("A is clicked");
    this.pointA = this.youtubePlayer.getCurrentTime();
    console.log(this.pointA);
  }

  backToA() {
    console.log("B is clicked");
    this.pointB = this.youtubePlayer.getCurrentTime();
    this.youtubePlayer.seekTo(this.pointA, true);
  }


　// 指定の時間に移動する　
  moveToTime(time){
    var seconds = Number(time.split(":")[0]*60) + Number(time.split(":")[1])
    this.youtubePlayer.seekTo(seconds, true);
    this.youtubePlayer.playVideo();
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

  freeMarker() {
    this.pointA = 0;
  }

  getsSpeed100(){
//    this.youtubePlayer.setPlaybackRate(1);
    this.plyr.player.speed = 1;
    this.plyr.player.play();
  }

  getsSpeed50(){
//    this.youtubePlayer.setPlaybackRate(0.5);
    this.plyr.player.play();
    this.plyr.player.speed = 0.5;
    console.log(this.plyr.player.speed);
  }

  getsSpeed25(){
    this.youtubePlayer.setPlaybackRate(0.25);
  }

  back2Sec() {
    this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime() - 2, true);
  }

  back3Sec() {
    this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime() - 3, true);
  }

  back5Sec() {
    this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime() - 5, true);
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.captions = captions;

    console.log(captions);
  }

  data: Array<{title: string, showDetails: boolean}> = [];
  constructor(public navCtrl: NavController) {
  for(let i = 1; i < 4 ; i++ ){
      this.data.push({
        title: 'Video '+i,
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
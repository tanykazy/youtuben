import {Component, OnInit, ViewChild} from '@angular/core';
import {YouTubePlayer} from '@angular/youtube-player';
import {loadYouTubeSubtitles, result} from '../utils/getYoutubeCaption'

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  title = "Practice"
  videoId: string = "p13eKmDz88g";

  captions = "";

  pointA = 0;
  pointB = 0;

  public items: Array<any>;
 
  @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;

  clickPlay() {
    this.youtubePlayer.playVideo();
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

  freeMarker() {
    this.pointA = 0;
  }

  getsSpeed100(){
    this.youtubePlayer.setPlaybackRate(1);
  }

  getsSpeed50(){
    this.youtubePlayer.setPlaybackRate(0.5);
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

    this.captions = result;

    console.log(result);
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
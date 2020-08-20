import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { PlyrComponent } from 'ngx-plyr';
import { GetCaptionService, Captions, Caption, SubtitleRequest } from '../services/get-caption.service';

import { RecordCountService } from '../services/record-count.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    private getCaptionService: GetCaptionService,
    private recordCountService: RecordCountService) { }
  // プロパティ一覧
  title = 'Practice';

  videoBank = [
    'eIho2S0ZahI', 'R1vskiVDwl4', 'F6ehyV7kqv8',
    'O_9TgmIg1nA', 'aH--sKPgbSE', 'A3Yj3q0QRLM'];

  videoId = this.videoBank[Math.floor(Math.random() * this.videoBank.length)];

  captionInfo: CaptionInfo = new CaptionInfo();
  captions = [];
  // captions: any;
  currentCaptions: Array<Caption>;
  captionIndex = 0;
  captionFlag = true;
  videoSources: Plyr.Source[] = [
    {
      src: this.videoId,
      provider: 'youtube',
    },
  ];
  // @Input()

  @ViewChild(PlyrComponent) plyr: PlyrComponent;

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
    console.log(this.plyr.player.hasAudio);
    console.log(this.plyr.player.increaseVolume(1));
  }

  play() {
    this.plyr.player.play();
  }

  clickPlay() {
    this.plyr.player.play();
  }

  public clickCaption(event): void {
    this.moveToTime(event);
    this.recordCountService.addCount();
    this.recordCountService.saveRecord();
  }

  private moveToTime(seconds: number): void {
    this.plyr.player.currentTime = seconds;
    this.plyr.player.play();
  }

  public changeCaption(): void {
    this.captionIndex = this.captionIndex + 1;
    this.captionIndex = this.captionIndex % this.captions.length;
    this.currentCaptions = this.captions[this.captionIndex];
    // this.currentCaptions = this.captionInfo.toggleLang().captions;
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

  ngOnInit() {
    this.recordCountService.loadRecord();
    // this.captions = await Promise.all([
    //   this.getCaptionService.loadYoutubeSubTitlesAsync({
    //     languageId: 'en',
    //     videoId: this.videoId,
    //   }),
    //   this.getCaptionService.loadYoutubeSubTitlesAsync({
    //     languageId: 'ja',
    //     videoId: this.videoId,
    //   }),
    // ]);

    const test = this.getCaptionService.loadYouTubeSubtitles([
      { videoid: this.videoId, languageid: 'en' },
      { videoid: this.videoId, languageid: 'ja' }],
      (result) => {
        console.log(result);
        this.captionInfo.setCaptions(result);
        this.captions.push(result.captions);
      });

    this.captionIndex = 0;
    this.currentCaptions = this.captions[this.captionIndex];

    // const cap = {
    //   en: this.getCaptionService.loadYoutubeSubTitlesAsync({
    //     languageId: 'en',
    //     videoId: this.videoId,
    //   }),
    //   ja: this.getCaptionService.loadYoutubeSubTitlesAsync({
    //     languageId: 'ja',
    //     videoId: this.videoId,
    //   })
    // };
    // console.log(cap);

    // console.log(this.captions);

    // for (const caption of this.captions) {
    //   for (const caps of caption) {
    //     caps.start = timeString2seconds(caps.start);
    //   }
    // }
    // const cap = [{
    //   captions: this.captions[0],
    //   lang: 'en'
    // }, {
    //   captions: this.captions[0],
    //   lang: 'ja'
    // }
    // ];
    // console.log(cap);

    // this.captionIndex = 0;
    // this.currentCaptions = this.captions[this.captionIndex];

    // console.log(this.captions);
    // this.captionInfo = new CaptionInfo(cap);
  }
}

function timeString2seconds(hhmmss: string): number {
  const ssmmhh: Array<string> = hhmmss.split(':').reverse();
  const base = 60;
  let n = 0;
  let result = 0;
  result += parseInt(ssmmhh[n], 10);
  n += 1;
  while (n < ssmmhh.length) {
    result += parseInt(ssmmhh[n], 10) * (base * n);
    n += 1;
  }
  return result;
}

class CaptionInfo {
  private captionsList: Array<Captions>;
  private captionsIndex: number;
  public current: Captions;

  constructor() {
    this.captionsIndex = 0;
    this.captionsList = [];
    this.current = this.captionsList[this.captionsIndex];
  }

  public setCaptions(captions: Captions) {
    // const cap = this.getCaptionsByLang(captions.lang);
    // if (!captions) {
    //   this.captionsList.push(captions);
    // } else {
    //   cap.captions = captions.captions;
    // }
    this.captionsList.push(captions);
    return captions;
  }

  public toggleLang(lang?: string): Captions {
    let captions: Captions;
    if (!lang) {
      this.captionsIndex = this.captionsIndex + 1;
      this.captionsIndex = this.captionsIndex % this.captionsList.length;
      captions = this.captionsList[this.captionsIndex];
    } else {
      captions = this.getCaptionsByLang(lang);
      if (!captions) {
        throw new Error(`${lang} is not found in caption list.`);
      }
    }
    this.current = captions;
    return this.current;
  }

  private getCaptionsByLang(lang: string): Captions {
    return this.captionsList.find(
      (element: Captions) => element.lang === lang);
  }
}

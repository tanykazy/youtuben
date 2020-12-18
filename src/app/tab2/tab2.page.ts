import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Service
import { GetVideoIdsService } from '../services/get-video-ids.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private http: HttpClient,
    private getVideoIdsService: GetVideoIdsService
    ){}

  public playlists = [
    { val: 'フォニックス', isChecked: true },
    { val: '発音記号', isChecked: true },
    { val: '旅行', isChecked: false },
  ];

  getVideoIds(){
    this.getVideoIdsService.getVideoIds();
    this.playlists = this.getVideoIdsService.playlists;
    console.log(this.playlists);
  }
}

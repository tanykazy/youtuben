import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetVideoIdsService {

  constructor(
    private http: HttpClient
  ){}

  playlists;

  getVideoIds(){
    this.http.get('https://script.google.com/macros/s/AKfycbxX_z1vk8vTUVCHnW5dX81xVKw8TCFIzEYoI-y6oKogjuSMiieD/exec?p=playlist').subscribe(response => {
    this.playlists = Object.entries(response);

    // 整形する
    this.playlists = this.playlists.map(playlist => {var obj1 = {}; obj1["playlist"] = playlist[0]; obj1["isChecked"] = true;return obj1; })

    })
  }
}

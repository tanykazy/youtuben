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

  videoIds;

  getVideoIds(){
    this.http.get('https://script.google.com/macros/s/AKfycbxX_z1vk8vTUVCHnW5dX81xVKw8TCFIzEYoI-y6oKogjuSMiieD/exec?p=playlist').subscribe(response => {
    this.playlists = Object.entries(response);

    this.playlists = this.playlists.map(playlist => {
        var obj1 = {}; obj1["val"] = playlist[0]; 
        obj1["videoIds"] = playlist[1];
        obj1["isChecked"] = true;
        return obj1; })

    this.videoIds = this.playlists.map(playlist => playlist.videoIds).flat();

    localStorage.setItem('videoIds', JSON.stringify(this.videoIds));

    console.log(this.playlists);
    })
  }
}

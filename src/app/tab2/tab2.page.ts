import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient) {
  }

  public genres: string[];

  public playlists = [
    { val: 'フォニックス', isChecked: true },
    { val: '発音記号', isChecked: true },
    { val: '旅行', isChecked: false },
    { val: 'ファッション', isChecked: false },
    { val: '映画', isChecked: false },
    { val: '絵本', isChecked: false }
  ];

  syncPlaylist(){
    this.http.get('https://script.google.com/macros/s/AKfycbzVyomZjKvoGwmo2Y_4HHYK2KizxvuSLA4YxbHAWB_fB95MN3Fh/exec?p=playlist').subscribe(response => {
      const playlists = Object.entries(response);
      console.log(playlists);

      this.playlists = [];

      for(let i = 0; playlists.length > i; i++){
        this.playlists.push({"val": playlists[i][0],"isChecked":false})
      }
    })
  }

}

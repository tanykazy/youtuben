import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordCountService {

  constructor() {}

  // 日付関係
  today: number;

  getYesterday(){
    const date = new Date();
    this.today = new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()
    return this.today;
  }

  getToday(){
    const date = new Date();
    this.today = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1).getTime()
    return this.today;
  }

  getTomorrow(){
    const date = new Date();
    this.today = new Date(date.getFullYear(),date.getMonth(),date.getDate()+2).getTime()
    return this.today;
  }


  // カウント数関係
  playCount = 0;

  addCount(){
    this.playCount += 1;
  }

  setCount(){
    localStorage.setItem(String(this.today),
                         String(this.playCount))
    console.log(localStorage.getItem(String(this.today)));
  }

  getCount(){
    return this.playCount;
  }

}

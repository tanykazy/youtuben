import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordCountService {

  constructor() {
    this.key = 'youtuben-record'; // TBD
  }

  private key: string;
  /**
   * AB再生を行った回数の記録
   * JSON フォーマット
   */
  private playRecord: PlayRecord;

  public addCount() {
    const date = new Date();
    let record = this.playRecord.getRecord(date);
    if (record === null) {
      record = {
        time: PlayRecord.toDateTime(date),
        count: 1
      };
    } else {
      record.count += 1;
    }
    this.playRecord.setRecord(record, date);
  }

  getAllRecord() {
    return this.playRecord.getAllRecord();
  }

  /**
   * Local Storage へ現在のレコードを保存する
   */
  saveRecord() {
    const key = this.key;
    const value = JSON.stringify(this.playRecord.getRawRecord());
    localStorage.setItem(key, value);
  }

  /**
   * Local Storage からレコードを読み出す
   */
  loadRecord() {
    const key = this.key;
    let value = JSON.parse(localStorage.getItem(key));
    if (value === null) {
      value = {};
    }
    this.playRecord = new PlayRecord(value);
  }

}

class PlayRecord {

  constructor(rec: object = {}) {
    this.rec = rec;
  }

  private rec: object;

  static toDateTime(date: Date): number {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private toKeys(date: Date): any {
    return {
      y: date.getFullYear(),
      m: date.getMonth(),
      d: date.getDate()
    };
  }

  public setRecord(val: PlayCount, date: Date) {
    const keys = this.toKeys(date);
    if (!this.rec[keys.y]) {
      this.rec[keys.y] = {};
    }
    if (!this.rec[keys.y][keys.m]) {
      this.rec[keys.y][keys.m] = {};
    }
    if (!this.rec[keys.y][keys.m][keys.d]) {
      this.rec[keys.y][keys.m][keys.d] = {
        time: 0,
        count: 0
      };
    }
    Object.assign(this.rec[keys.y][keys.m][keys.d], val);
  }

  public getRecord(date: Date): PlayCount {
    const keys = this.toKeys(date);
    if (!this.rec[keys.y]) {
      return null;
    }
    if (!this.rec[keys.y][keys.m]) {
      return null;
    }
    if (!this.rec[keys.y][keys.m][keys.d]) {
      return null;
    }
    return this.rec[keys.y][keys.m][keys.d];
  }

  public getRawRecord(): object {
    return this.rec;
  }

  public getAllRecord(): Array<PlayCount> {
    const record = [];
    for (const y of Object.keys(this.rec)) {
      for (const m of Object.keys(this.rec[y])) {
        for (const d of Object.keys(this.rec[y][m])) {
          record.push(this.rec[y][m][d]);
        }
      }
    }
    return record;
  }
}

interface PlayCount {
  time: number;
  count: number;
}

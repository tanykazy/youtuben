import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordCountService {

  constructor() {
    this.key = 'youtuben-record'; // TBD
  }

  /**
   * Local Storage にリピート再生数を保存するときのkey
   */
  private key: string;

  /**
   * AB再生を行った回数の記録
   */
  private playRecord: PlayRecord;

  /**
   * リピート再生数をインクリメントする。
   * リピート再生数が記録されていない場合は、作成する。
   */
  public addCount() {
    const date = new Date();
    let record = this.playRecord.getRecord(date);
    if (record === null) {
      record = {
        t: PlayRecord.toDateTime(date),
        c: 1
      };
    } else {
      record.c += 1;
    }
    this.playRecord.setRecord(record, date);
  }

  /**
   * グラフ表示用を想定
   * リピート再生数のエントリを配列で返す
   * 半年分
   */
  getHalfYearRecord(): Array<PlayCount> {
    // 単純な構造で履歴を保存するほうがいいかもしれない
    const records = this.playRecord.getAllRecord();
    return records.slice(-Math.floor(365 / 2));
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

/**
 * 再生数の記録用クラス
 */
class PlayRecord {

  constructor(rec: object = {}) {
    this.rec = rec;
    const days: Array<Date> = this.create6monthDate();
    for (const d of days) {
      const pc: PlayCount = this.getRecord(d);
      if (pc === null) {
        this.setRecord({
          t: PlayRecord.toDateTime(d),
          c: 0
        }, d);
      }
    }
  }

  /**
   * 再生数を保持する
   * 連想配列
   * {YYYY:{
   *    MM:{
   *      DD:PlayCount
   *    }
   *   }
   *  }
   */
  private rec: object;

  /**
   * Dateオブジェクトから年、月、日を抽出して、ミリ秒に変換する
   * @param date 変換元のオブジェクト
   * @returns UTCミリ秒
   */
  static toDateTime(date: Date): number {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  }

  /**
   * Dateオブジェクトから年、月、日を取り出す。
   * 連想配列のキーとするために使うことを想定
   * @param date Dateオブジェクト
   * @returns.y 年
   * @returns.m 月 0始まり
   * @returns.d 日
   */
  private toKeys(date: Date): any {
    return {
      y: date.getFullYear(),
      m: date.getMonth(),
      d: date.getDate()
    };
  }

  private create6monthDate(): Array<Date> {
    const dateArray = new Array();
    const stopDate = new Date();
    const currentDate = new Date();
    currentDate.setMonth(stopDate.getMonth() - 6);
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }

  /**
   * 内部変数へリピート数を記録する
   * @param val 
   * @param date 
   */
  public setRecord(val: PlayCount, date: Date) {
    const keys = this.toKeys(date);
    if (!this.rec[keys.y]) {
      this.rec[keys.y] = {};
    }
    if (!this.rec[keys.y][keys.m]) {
      this.rec[keys.y][keys.m] = {};
    }
    if (!this.rec[keys.y][keys.m][keys.d]) {
      this.rec[keys.y][keys.m][keys.d] = {};
    }
    Object.assign(this.rec[keys.y][keys.m][keys.d], val);
  }

  /**
   * 指定した年月日の再生回数オブジェクトを返す
   * @param date 
   */
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

  /**
   * 内部に保持している変数を返す
   * Local Storage へ保存する際に呼び出されることを想定
   */
  public getRawRecord(): object {
    return this.rec;
  }

  /**
   * すべての記録を配列で返す
   */
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

/**
 * 再生回数
 */
export interface PlayCount {
  t: number;
  c: number;
}

class DateRecords {
  constructor() { }
  private records: object;
  public setRecord() { }
  // データの存在チェックを入れる
  public getRecord(year?: number, month?: number, day?: number): object | null {
    if ((typeof year !== 'number')
      && (typeof month !== 'number')
      && (typeof day !== 'number')) {
      return this.records;
    }
    if ((typeof year === 'number')
      && (typeof month !== 'number')
      && (typeof day !== 'number')) {
      return this.records[year];
    }
    if ((typeof year === 'number')
      && (typeof month === 'number')
      && (typeof day !== 'number')) {
      return this.records[year][month];
    }
    if ((typeof year === 'number')
      && (typeof month === 'number')
      && (typeof day === 'number')) {
      return this.records[year][month][day];
    }
  }
}

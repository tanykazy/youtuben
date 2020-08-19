import { Injectable } from '@angular/core';

const youtubeTimedtextUrl = 'https://video.google.com/timedtext';

@Injectable({
  providedIn: 'root',
})
export class GetCaptionService {

  constructor() { }

  public loadYouTubeSubtitles(requests: SubtitleRequest[]) {
    const jobs = requests.map((request) => {
      return xmlHttpRequest(
        'GET',
        buildYoutubeUrl(request.videoid, request.languageid),
        { responseType: 'document' });
    });
    // console.log(jobs);

    let result = doParallel(jobs);

    function resolveAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
    }

    async function f1() {
      var x = await resolveAfter2Seconds(10);
      console.log(x); // 10
    }
    let a = f1();
    console.log(a);

    return Promise.resolve(result).then((a) => a);
  }
}

function doParallel(jobs: Promise<any>[]): Promise<any> {
  return Promise.all(jobs);
}


function buildYoutubeUrl(videoid: string, langid: string): string {
  return `${youtubeTimedtextUrl}?lang=${langid}&v=${videoid}`;
}

function xmlHttpRequest(method: string, url: string, options?: {
  body?: any,
  async?: boolean,
  responseType?: XMLHttpRequestResponseType
}): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = options.responseType;
    xhr.open(
      method,
      url,
      typeof options.async === 'undefined' ? true : options.async);
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      console.log('** An error occurred during the transaction');
      reject(xhr.status);
    };
    xhr.send(options.body);
  });
}

function parseTranscriptAsJSON(xml) {
  return [].slice
    .call(xml.querySelectorAll('transcript text'))
    .map((text) => ({
      start: formatTime(Math.floor(text.getAttribute('start'))),
      dur: formatTime(Math.floor(text.getAttribute('dur'))),
      text: decodeHTML(text.textContent).replace(/\s+/g, ' '),
    }));
}

function formatTime(seconds) {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8).slice(4, 11);
  //    return Date.parse(date) * 0.001;
}

function jsonToCsv(json, options) {
  options = Object.assign(
    {
      includeHeader: true,
      delimiter: ',',
      ignoreKeys: [],
    },
    options || {}
  );
  const keys = Object.keys(json[0]).filter(
    (key) => options.ignoreKeys.indexOf(key) === -1
  );
  const lines = [];
  if (options.includeHeader) {
    lines.push(keys.join(options.delimiter));
  }
  return lines
    .concat(
      json.map((entry) =>
        keys.map((key) => entry[key]).join(options.delimiter)
      )
    )
    .map((entry) => entry.replace('-', ''))
    .map((entry) => entry.split('	'));
}

function decodeHTML(str) {
  const el = document.createElement('div');
  if (str && typeof str === 'string') {
    str = str
      .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
      .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
    el.innerHTML = str;
    str = el.textContent;
    el.textContent = '';
  }
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
  return str;
}

export interface SubtitleRequest {
  videoid: string;
  languageid: string;
}

export interface Captions {
  captions: Array<Caption>;
  lang: string;
}

export interface Caption {
  start: number;
  dur: number;
  text: string;
}

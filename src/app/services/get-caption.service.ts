import { Injectable } from '@angular/core';

const youtubeTimedtextUrl = 'https://video.google.com/timedtext';
function buildYoutubeUrl(v: string, lang: string): string {
  return `${youtubeTimedtextUrl}?lang=${lang}&v=${v}`;
}

@Injectable({
  providedIn: 'root',
})
export class GetCaptionService {

  constructor() { }

  public loadYouTubeSubtitles(requests: SubtitleRequest[], callback: (result: Captions) => void) {
    for (const request of requests) {
      const response: Captions = {
        lang: request.languageid,
        captions: []
      };
      doParallel(
        xmlHttpRequest(
          'GET',
          buildYoutubeUrl(request.videoid, request.languageid),
          { responseType: 'document' }),
        (result) => {
          response.captions = parseXML(result);
          return response;
        },
        callback);
    }
  }
}

async function doParallel(job: Promise<any>, post: (result: any) => any, callback: (result: any) => void) {
  let result = await job;
  result = post(result);
  return callback(result);
}

function parseXML(xml: XMLDocument): any[] {
  const elements = xml.getElementsByTagName('text');
  return Array.from(elements).map((element) => ({
    start: parseFloat(element.getAttribute('start')),
    dur: parseFloat(element.getAttribute('dur')),
    text: element.textContent.trim()
  }));
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
      typeof options.async !== 'boolean' ? true : options.async);
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

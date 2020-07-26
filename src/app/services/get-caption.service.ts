import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetCaptionService {
  constructor() {}
  getYouTubeVideoId() {
    const videoID = window.location.search.split('v=')[1];
    if (videoID != null) {
      const ampersandPosition = videoID.indexOf('&');
      if (ampersandPosition !== -1) {
        return videoID.substring(0, ampersandPosition);
      }
    }
    return null;
  }
  loadYouTubeSubtitles(videoId, options) {
    options = Object.assign(
      {
        baseUrl: 'https://video.google.com/timedtext',
        languageId: 'en',
        callbackFn(json) {
          console.log(json);
        },
      },
      options || {}
    );

    const decodeHTML = (() => {
      const el = document.createElement('div');
      function __decode(str) {
        if (str && typeof str === 'string') {
          str = str
            .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
            .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
          el.innerHTML = str;
          str = el.textContent;
          el.textContent = '';
        }
        return str;
      }
      removeElement(el);
      return __decode;
    })();

    function removeElement(el) {
      // tslint:disable-next-line:no-unused-expression
      el && el.parentNode && el.parentNode.removeChild(el);
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

    const xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      `${options.baseUrl}?lang=${options.languageId}&v=${videoId}`,
      true
    );
    xhr.responseType = 'document';
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        options.callbackFn(parseTranscriptAsJSON(this.response));
      } else {
        console.log('Error: ' + this.status);
      }
    };

    xhr.onerror = () => {
      console.log('Error!');
    };

    xhr.send();
  }

  loadYoutubeSubTitlesAsync(options: { videoId: string; languageId: string }) {
    return new Promise((resolve, reject) => {
      this.loadYouTubeSubtitles(options.videoId, {
        languageId: options.languageId,
        callbackFn: (json) => {
          const result = this.jsonToCsv(json, {
            includeHeader: false,
            ignoreKeys: ['dur'],
            delimiter: '\t',
          });
          resolve(result);
        },
      });
    });
  }

  jsonToCsv(json, options) {
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
}

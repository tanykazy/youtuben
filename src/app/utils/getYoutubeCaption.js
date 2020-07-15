function getYouTubeVideoId() {
  var video_id = window.location.search.split('v=')[1];
  if (video_id != null) {
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      return video_id.substring(0, ampersandPosition);
    }
  }
  return null;
}

export function loadYouTubeSubtitles(videoId, options) {
  options = Object.assign({
      baseUrl : 'https://video.google.com/timedtext',
      languageId : 'en',
      callbackFn : function(json) { console.log(json); }
    }, options || {});

  var decodeHTML = (function() {
    let el = document.createElement('div');
    function __decode(str) {
      if (str && typeof str === 'string') {
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
          .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
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
    el && el.parentNode && el.parentNode.removeChild(el);
  }

  function parseTranscriptAsJSON(xml) {
    return [].slice.call(xml.querySelectorAll('transcript text'))
      .map(text => ({
        start : formatTime(Math.floor(text.getAttribute('start'))),
        dur : formatTime(Math.floor(text.getAttribute('dur'))),
        text : decodeHTML(text.textContent).replace(/\s+/g, ' '),
      })
      );
  }

  function formatTime(seconds) {
    let date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8).slice(4,11);
//    return Date.parse(date) * 0.001;
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', `${options.baseUrl}?lang=${options.languageId}&v=${videoId}`, true);
  xhr.responseType = 'document';
  xhr.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      options.callbackFn(parseTranscriptAsJSON(this.response));
    } else {
      console.log('Error: ' + this.status);
    }
  };

  xhr.onerror = function() {
    console.log('Error!');
  };

  xhr.send();
}

function jsonToCsv(json, options) {
  options = Object.assign({
    includeHeader : true,
    delimiter : ',',
    ignoreKeys : []
  }, options || {});
  let keys = Object.keys(json[0]).filter(key => options.ignoreKeys.indexOf(key) === -1);
  let lines = [];
  if (options.includeHeader) { 
    lines.push(keys.join(options.delimiter)); 
  }
  return lines.concat(json
    .map(entry => keys.map(key => entry[key]).join(options.delimiter)))
    .map(entry => entry.split("	"))
}

export let result = [];

loadYouTubeSubtitles('p13eKmDz88g', {
    callbackFn : function(json) {
      result.push(jsonToCsv(json, {
        includeHeader : false,
        ignoreKeys : [ 'dur' ],
        delimiter : '\t',
      })
      );
      // result = JSON.stringify(json);

    }
});


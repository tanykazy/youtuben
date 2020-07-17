(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"centering_parent\" >\n    <ion-grid>\n    <ion-row>\n      <ion-col>\n        <youtube-player\n        [videoId]=\"videoId\"\n        [width]=\"300\"    \n        [height]=\"200\" \n        >\n        </youtube-player>    \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"getsSpeed100()\">100%</ion-button>\n        <ion-button (click)=\"getsSpeed50()\">50%</ion-button>\n        <ion-button (click)=\"changeCaption()\">字幕切替</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div style=\"width:100%;height:600px;overflow:auto;\">\n\n      <div *ngIf='captionFlag; else Statement'>\n        <ul *ngFor=\"let caption of captions[0]\">\n          <li (click)=\"moveToTime(caption[0])\">{{caption[1]}}</li>\n        </ul>\n      </div>\n\n      <ng-template #Statement>\n        <ul *ngFor=\"let caption of captions[1]\">\n          <li (click)=\"moveToTime(caption[0])\">{{caption[1]}}</li>\n        </ul>\n      </ng-template>\n\n    </div>\n\n  </ion-grid>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");









let Tab1PageModule = class Tab1PageModule {
    constructor() {
        this.title = "Practice";
    }
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__["YouTubePlayerModule"],
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.centering_parent {\n  padding: 20px;\n  /* 余白指定 */\n  text-align: center;\n  /* 中央寄せ */\n}\nul {\n  list-style: none;\n  font-size: 35px;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsIi9Vc2Vycy90Y29vbC9EZXNrdG9wL3lvdXR1YmVuL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQTRCLFNBQUE7RUFDNUIsa0JBQUE7RUFBNEIsU0FBQTtBREloQztBQ0RBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURJSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2VudGVyaW5nX3BhcmVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIC8qIOS9meeZveaMh+WumiAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIOS4reWkruWvhOOBmyAqL1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iLCIuY2VudGVyaW5nX3BhcmVudCB7XG4gICAgcGFkZGluZzogMjBweDsgICAgICAgICAgICAgIC8qIOS9meeZveaMh+WumiAqL1xuICAgIHRleHQtYWxpZ246ICBjZW50ZXI7ICAgICAgICAvKiDkuK3lpK7lr4TjgZsgKi9cbn1cblxudWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _utils_getYoutubeCaptionEnglish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getYoutubeCaptionEnglish */ "./src/app/utils/getYoutubeCaptionEnglish.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let Tab1Page = class Tab1Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.title = "Practice";
        this.videoId = "p13eKmDz88g";
        this.captions = "";
        this.pointA = 0;
        this.pointB = 0;
        this.captionFlag = true;
        this.data = [];
        for (let i = 1; i < 4; i++) {
            this.data.push({
                title: 'Video ' + i,
                showDetails: false
            });
        }
    }
    clickPlay() {
        this.youtubePlayer.playVideo();
    }
    clickPause() {
        this.youtubePlayer.pauseVideo();
    }
    clickStop() {
        this.youtubePlayer.stopVideo();
    }
    setA() {
        console.log("A is clicked");
        this.pointA = this.youtubePlayer.getCurrentTime();
        console.log(this.pointA);
    }
    backToA() {
        console.log("B is clicked");
        this.pointB = this.youtubePlayer.getCurrentTime();
        this.youtubePlayer.seekTo(this.pointA, true);
    }
    // 指定の時間に移動する　
    moveToTime(time) {
        var seconds = Number(time.split(":")[0] * 60) + Number(time.split(":")[1]);
        this.youtubePlayer.seekTo(seconds, true);
        this.youtubePlayer.playVideo();
    }
    changeCaption() {
        if (this.captionFlag == true) {
            this.captionFlag = false;
            console.log(this.captionFlag);
        }
        else if (this.captionFlag == false) {
            this.captionFlag = true;
            console.log(this.captionFlag);
        }
    }
    checkCaptionFlag() {
        return this.captionFlag;
    }
    freeMarker() {
        this.pointA = 0;
    }
    getsSpeed100() {
        this.youtubePlayer.setPlaybackRate(1);
    }
    getsSpeed50() {
        this.youtubePlayer.setPlaybackRate(0.5);
    }
    getsSpeed25() {
        this.youtubePlayer.setPlaybackRate(0.25);
    }
    back2Sec() {
        this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime() - 2, true);
    }
    back3Sec() {
        this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime() - 3, true);
    }
    back5Sec() {
        this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime() - 5, true);
    }
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        this.captions = _utils_getYoutubeCaptionEnglish__WEBPACK_IMPORTED_MODULE_3__["captions"];
        console.log(_utils_getYoutubeCaptionEnglish__WEBPACK_IMPORTED_MODULE_3__["captions"]);
    }
    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'add-outline';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-remove-circle-outline';
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayer"])
], Tab1Page.prototype, "youtubePlayer", void 0);
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ }),

/***/ "./src/app/utils/getYoutubeCaptionEnglish.js":
/*!***************************************************!*\
  !*** ./src/app/utils/getYoutubeCaptionEnglish.js ***!
  \***************************************************/
/*! exports provided: loadYouTubeSubtitles, captions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadYouTubeSubtitles", function() { return loadYouTubeSubtitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captions", function() { return captions; });
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

function loadYouTubeSubtitles(videoId, options) {
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
    .map(entry => entry.replace("-",""))
    .map(entry => entry.split("	"))
}

let captions = [];

loadYouTubeSubtitles('p13eKmDz88g', {
    callbackFn : function(json) {
      captions.push(jsonToCsv(json, {
        includeHeader : false,
        ignoreKeys : [ 'dur' ],
        delimiter : '\t',
      })
      );
      // result = JSON.stringify(json);

    }
});

loadYouTubeSubtitles('p13eKmDz88g', {
  languageId : 'ja',
  callbackFn : function(json) {
    captions.push(jsonToCsv(json, {
      includeHeader : false,
      ignoreKeys : [ 'dur' ],
      delimiter : '\t',
    })
    );
    // result = JSON.stringify(json);

  }
});

/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map
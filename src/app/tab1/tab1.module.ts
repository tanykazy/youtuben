import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import {YouTubePlayerModule} from '@angular/youtube-player'; 

import { PlyrModule } from 'ngx-plyr';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    YouTubePlayerModule,
    PlyrModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  title = "Practice";
}
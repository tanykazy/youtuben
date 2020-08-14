import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { ChartsComponent } from './charts/charts.component';

@NgModule({
    declarations: [
        ChartsComponent,
    ],
    imports: [
        CommonModule,
        Ng2GoogleChartsModule,
    ],
    exports: [
        ChartsComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ComponentsModule { }

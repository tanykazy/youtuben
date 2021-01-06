import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";

import { ChartsComponent } from './charts/charts.component';

@NgModule({
    declarations: [
        ChartsComponent,
    ],
    imports: [
        NgApexchartsModule,
    ],
    exports: [
        ChartsComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [
        ComponentsModule
    ],
    providers: [],
})
export class ComponentsModule { }
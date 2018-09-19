import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RecordResolverGuard } from '@core/services/edit.guard.service';
import { StatisticsOverviewComponent} from './statistics-overview/statistics-overview.component';
import { ChartsComponent} from './charts/charts.component';
import { AngularEchartsModule} from 'ngx-echarts';
import { BarComponent} from './shared/charts/bar/bar.component';
import { MapdComponent} from './shared/charts/map/mapd.component';
import { PieComponent} from './shared/charts/pie/pie.component';
import { TreemapComponent} from './shared/charts/treemap/treemap.component';
import { SingledotComponent} from './shared/charts/singledot/singledot.component';
import { StackbarComponent} from './shared/charts/stackbar/stackbar.component';
import { NormalpieComponent} from './shared/charts/normalpie/normalpie.component';

const routes: Routes = [
     { path: 'detail', component: StatisticsOverviewComponent  },
     { path: 'charts/:CID', component: ChartsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        AngularEchartsModule
    ],
    exports: [
        RouterModule,
        AngularEchartsModule
    ],
    declarations: [
        StatisticsOverviewComponent,
        ChartsComponent,
        BarComponent,
        MapdComponent,
        PieComponent,
        TreemapComponent,
        SingledotComponent,
        StackbarComponent,
        NormalpieComponent
    ],
    providers: [
        RecordResolverGuard
    ],
    entryComponents: [
    ]
})
export class StatisticsManagementModule { }

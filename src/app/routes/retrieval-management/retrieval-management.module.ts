import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RecordResolverGuard } from '@core/services/edit.guard.service';
import { RetrievalOverviewComponent} from './retrieval-overview/retrieval-overview.component';
import { HttpModule, JsonpModule} from '@angular/http';
import { AngularEchartsModule} from 'ngx-echarts';


const routes: Routes = [
    { path: 'detail', component: RetrievalOverviewComponent  },
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        AngularEchartsModule,
        HttpModule,
        JsonpModule
    ],
    exports: [
        RouterModule,
        AngularEchartsModule
    ],
    declarations: [
        RetrievalOverviewComponent
    ],
    providers: [
        RecordResolverGuard
    ],
    entryComponents: [
    ]
})
export class RetrievalManagementModule {}

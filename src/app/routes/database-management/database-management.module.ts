import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RecordResolverGuard } from '@core/services/edit.guard.service';
import { DatabaseSettingComponent} from './database-setting/database-setting.component';

const routes: Routes = [
    { path: 'detail', component:  DatabaseSettingComponent },
    // { path: 'singlePg', component: SinglePgComponent  },
    // { path: 'singlePg/:PID', component: SinglePgComponent },

];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        DatabaseSettingComponent
    ],
    providers: [
        RecordResolverGuard
    ],
    entryComponents: [
    ]
})
export class DatabaseManagementModule { }

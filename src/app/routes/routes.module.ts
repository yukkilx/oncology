import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { SurveyManagementModule} from './survey-management/survey-management.module';
import { StatisticsManagementModule} from './statistics-management/statistics-management.module';
import {RetrievalManagementModule} from './retrieval-management/retrieval-management.module';
import { routes } from './routes';
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { LoginAuthService } from '@core/services/login.auth.service';
import { LoginAuthGuard } from '@core/services/login.guard.service';
import { UserAuthGuard } from '@core/services/user.guard.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes,
            { useHash: true }),
        PagesModule,
        SurveyManagementModule,
        StatisticsManagementModule,
        RetrievalManagementModule
    ],
    declarations: [
        DashboardV1Component
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LoginAuthGuard,
        LoginAuthService,
        UserAuthGuard
    ]
})

export class RoutesModule {}

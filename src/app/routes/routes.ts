import { LayoutComponent } from '../layout/layout.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LoginComponent } from './pages/login/login.component';
import { LockComponent } from './pages/lock/lock.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Page404Component } from './pages/404/404.component';
import { Page500Component } from './pages/500/500.component';
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { LoginAuthGuard } from '@core/services/login.guard.service';
import { UserAuthGuard } from '@core/services/user.guard.service';

export const routes = [
    { path: '', redirectTo: 'system', pathMatch: 'full' },
    {
        path: 'system',
        component: LayoutComponent,
        canActivateChild: [LoginAuthGuard],
        children: [
            { path: '', redirectTo: 'survey/detail', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard/v1', component: DashboardV1Component, data: { translate: 'dashboard_v1' } },
            { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'logics', loadChildren: './logics/logics.module#LogicsModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            { path: 'survey', loadChildren: './survey-management/survey-management.module#SurveyManagementModule',
                data: { title: 'survey'}},
            { path: 'statistics', loadChildren: './statistics-management/statistics-management.module#StatisticsManagementModule'},
            { path: 'retrieval', loadChildren: './retrieval-management/retrieval-management.module#RetrievalManagementModule'},
            { path: 'dbsettings', loadChildren: './database-management/database-management.module#DatabaseManagementModule'},
            { path: 'user', loadChildren: './user-management/user-management.module#UserManagementModule' },
            { path: 'file', loadChildren: './file-management/file-management.module#FileManagementModule' },
            { path: 'useful_tables', loadChildren: './useful-table/tables.module#UsefulTablesModule' }
        ]
    },
    // 全屏布局
    {
        path: 'data-v',
        component: LayoutFullScreenComponent,
        children: [
            { path: '', loadChildren: './data-v/data-v.module#DataVModule' },
        ]
    },
    // 单页不包裹Layout
    { path: 'login', component: LoginComponent, data: { title: 'login' } },
    { path: 'forget', component: ForgetComponent, data: { translate: 'forget' } },
    { path: 'lock', component: LockComponent, data: { translate: 'lock' } },
    { path: 'maintenance', component: MaintenanceComponent},
    { path: '404', component: Page404Component },
    { path: '500', component: Page500Component },
    { path: '**', redirectTo: 'survey/detail' }
];

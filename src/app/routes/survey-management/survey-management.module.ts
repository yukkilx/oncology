import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { RecordResolverGuard } from '@core/services/edit.guard.service';

import { InputcmpComponent } from './shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from './shared/radiocmp/radiocmp.component';
import { IdccmpComponent} from './shared/idccmp/idccmp.component';
import { PhoneComponent} from './shared/phonecmp/phonecmp.component';
import { CheckboxcmpComponent } from './shared/checkboxcmp/checkboxcmp.component';
import { SurveyOverviewComponent } from './survey-overview/survey-overview.component';
import { SingletableComponent} from './shared/tablecmp/singleTable/singletable.component';
import { Table71Component } from './shared/tablecmp/Table71/Table71.component';
import { DatecmpComponent } from './shared/datecmp/datecmp.component';
import { ExampleComponent } from '../useful-table/example/example.component';
import { MultiTableComponent } from '../useful-table/multi-table/multi-table.component';
import { SelectableTableComponent } from '../useful-table/selectable-table/selectable-table.component';
import { Table52Component } from '../useful-table/table52/table52.component';
import { Table53Component } from '../useful-table/table53/table53.component';
import { Table54Component } from '../useful-table/table54/table54.component';
import { Table55Component } from '../useful-table/table55/table55.component';
import { SinglePgComponent } from './singlePg/singlePg.component';
import { Table64Component } from './shared/tablecmp/table64/table64.component';
import { SelectableInputComponent } from './shared/tablecmp/selectable-input/selectable-input.component';
import { MultiRadioComponent } from './shared/tablecmp/multi-radio/multi-radio.component';
import { AutoIncInputComponent } from './shared/tablecmp/auto-inc-input/auto-inc-input.component';
import { AddrcmpComponent } from './shared/addrcmp/addrcmp.component';
import { HighTableComponent } from '../useful-table/high-table/high-table.component';
import { OptionComponent} from './shared/optioncmp/option.component';

const routes: Routes = [
    { path: 'detail', component: SurveyOverviewComponent  },
    { path: 'singlePg', component: SinglePgComponent  },
    { path: 'singlePg/:PID', component: SinglePgComponent },

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
        InputcmpComponent,
        RadiocmpComponent,
        PhoneComponent,
        IdccmpComponent,
        CheckboxcmpComponent,
        SurveyOverviewComponent,
        DatecmpComponent,
        SingletableComponent,
        ExampleComponent,
        SelectableTableComponent,
        Table52Component,
        MultiTableComponent,
        Table53Component,
        Table54Component,
        Table55Component,
        Table71Component,
        SinglePgComponent,
        Table64Component,
        SelectableInputComponent,
        MultiRadioComponent,
        AutoIncInputComponent,
        AddrcmpComponent,
        HighTableComponent,
        OptionComponent
    ],
    providers: [
        RecordResolverGuard
    ],
    entryComponents: [
    ]
})
export class SurveyManagementModule { }

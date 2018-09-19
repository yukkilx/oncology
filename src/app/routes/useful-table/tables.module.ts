/**
 * Created by th3ee on 1/4/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { MultiTableComponent } from './multi-table/multi-table.component';
import { SelectableTableComponent } from './selectable-table/selectable-table.component';
import { Table52Component } from './table52/table52.component';
import { Table53Component } from './table53/table53.component';
import { Table54Component } from './table54/table54.component';
import { Table55Component } from './table55/table55.component';
import { HighTableComponent } from './high-table/high-table.component';
const routes: Routes = [
    {path: 'example', component: ExampleComponent},
    {path: 'multi-table', component: MultiTableComponent},
    {path: 'selectable-table', component: SelectableTableComponent},
    {path: 'table52', component: Table52Component},
    {path: 'table53', component: Table53Component},
    {path: 'table54', component: Table54Component},
    {path: 'table55', component: Table55Component}
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),

    ],
    exports: [
        RouterModule
    ],
    declarations: [
    /*ExampleComponent,
    MultiTableComponent,
    SelectableTableComponent,
    Table52Component,
    Table53Component,
    Table54Component,
    Table55Component*/
    HighTableComponent],
    providers: [
    ],
    entryComponents: [
    ]
})
export class UsefulTablesModule { }

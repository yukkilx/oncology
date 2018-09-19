import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params, NavigationStart, NavigationEnd} from '@angular/router';
import { AngularEchartsModule } from 'ngx-echarts';
import { ChartsOptions } from '../shared/charts_configure';
import { BarComponent } from '../shared/charts/bar/bar.component';
import { MapdComponent} from '../shared/charts/map/mapd.component';
import { PieComponent} from '../shared/charts/pie/pie.component';
import {PatientData} from '../shared/data/patient_data';

// declare var echarts: any;

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit, AfterViewInit {
    @ViewChildren(BarComponent) BarItems: QueryList<BarComponent>;
    @ViewChildren(MapdComponent) MapItems: QueryList<MapdComponent>;
    @ViewChildren(PieComponent) PieItems: QueryList<PieComponent>;
    CID = '';
    titles = 'z';
    options = new ChartsOptions().options;
    option_list = []; // 初始化chart的option
    option_lists = []
    patient_sdata = new PatientData().patient_summary_data;
    patient_data = new PatientData().patient_data;
    option_s = {};
    ngOnInit() {

    }
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private charts: AngularEchartsModule
    ) {
        this.CID = this.route.params['value']['CID'];
        const step = parseInt(this.CID)
        if (this.CID) {
            this.titles = this.options[this.CID].menu_name;
            console.log(this.titles);
            this.option_list = this.options[this.CID].charts;
            console.log(this.CID);
        }


    }

    ngAfterViewInit() {




        this.option_s = {

        };

        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                console.log('NavigationStart..............');
                const index = this.route.params['value']['CID'];
                this.option_list = this.options[index].charts;

                this.titles = this.options[index].menu_name;

            });
    }


}

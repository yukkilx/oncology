import { Component, OnInit} from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { Statisticsmenu } from '../shared/configure_route';


@Component({
    selector: 'app-statistics-overview',
    templateUrl: './statistics-overview.component.html',
    styleUrls: ['./statistics-overview.component.css']
})

export class StatisticsOverviewComponent implements OnInit {

    menu_list = new Statisticsmenu().menus;

    ngOnInit() {}
    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: HttpService
    ) {

    }

    goto(index ) {
        console.log('12345');
        this.router.navigate(['system/statistics/charts' + '/' + index]);
    }
}



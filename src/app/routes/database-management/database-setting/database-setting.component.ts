import { Component, OnInit} from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import {Initdb} from './Initdb';

@Component({
    selector: 'app-database-setting',
    templateUrl: './database-setting.component.html',
    styleUrls: ['./database-setting.component.css']
})

export  class DatabaseSettingComponent implements OnInit {

    pname = '';


    ngOnInit() {}
    constructor(
        private service: HttpService,
        private route: ActivatedRoute,
        private router: Router
    ) { }
    initdb() {
        const db = new Initdb();
        const dbsave = db.Initdb();
        let initData = {};
        initData = {
            'Department': this.pname,
            'Hospital': dbsave
        }

        this.service.initDatabase(initData).subscribe( (res) => {
            console.log('数据库初始化。。。');
        });
    }

}

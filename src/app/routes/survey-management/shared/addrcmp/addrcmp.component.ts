import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import {Question} from '../question';

@Component({
    selector: 'app-addrcmp',
    templateUrl: './addrcmp.component.html',
    styleUrls: ['./addrcmp.component.less']
})
export class AddrcmpComponent extends Question implements OnInit {

    localAnswer = ''; // 存储数据
    valid_confirmed = false;

    areas;
    provinces;
    provincesName;
    cities;
    streets;

    initArray = new Array(5);
    nameArray = new Array(5);

    constructor(
        private service: HttpService
    ) { super(); }

    ngOnInit() {
        this.getProvince();
        this.getCity();
        this.getArea();
        this.getStreet();
    }

    getProvince() {
        this.service.getChinaDivision('provinces').subscribe(res => {
            this.provinces = res.json().map(province => ({
                    label: province.name,
                    value: province.code
                }
            ));
        });
    }
    getCity() {
        this.cities = [];
        this.service.getChinaDivision('cities').subscribe(res => {
            const cities = res.json();
            cities.forEach((city) => {
                if ( city.parent_code === this.initArray[0]) {
                    this.cities.push({
                        label: city.name,
                        value: city.code
                    });
                }
            });
        });
        if ( this.provinces) {
            this.provinces.map(province => {
                if ( province.value === this.initArray[0]) {
                    this.nameArray[0] = province.label + ',' + province.value;
                    console.log(this.nameArray);
                }
            });
        }
    }
    getArea() {
        this.areas = [];
        this.service.getChinaDivision('areas').subscribe(res => {
            const areas = res.json();
            areas.forEach((area) => {
                if ( area.parent_code === this.initArray[1]) {
                    this.areas.push({
                        label: area.name,
                        value: area.code
                    });
                }
            });
        });
        if ( this.cities) {
            this.cities.map(city => {
                if ( city.value === this.initArray[1]) {
                    this.nameArray[1] = city.label + ',' + city.value;
                }
            });
        }
    }
    getStreet() {
        this.streets = [];
        this.service.getChinaDivision('streets').subscribe(res => {
            const streets = res.json();
            console.log(this.initArray[2]);
            // console.log(streets);
            streets.forEach((street) => {
                if ( street.parent_code === this.initArray[2]) {
                    this.streets.push({
                        label: street.name,
                        value: street.code
                    });
                }
            });
        });
        if ( this.areas) {
            this.areas.map(area => {
                if ( area.value === this.initArray[2]) {
                    this.nameArray[2] = area.label + ',' + area.value;
                }
            });
        }
    }
    answerChange() {
        // this.streets.map(street => {
        //     if ( street.value === this.initArray[3]) {
        //         this.nameArray[3] = street.label + ',' + street.value;
        //     }
        // });
        this.streets.map(street => {
            if ( street.value === this.initArray[3]){
                this.nameArray[3] = street.label;
            }
        });
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        };
        tem.Record_ID = this.question.dbId;
        tem.Record_Value = this.nameArray.join(' ') + this.initArray[4];

        /*const addrCode = {
            Record_ID: this.question.id2,
            Record_Value: this.initArray.join(' ')
        };*/
        res.push(tem);
        // res.push(addrCode);
        this.answer = res;
        console.log(this.initArray);
        console.log(tem);
        if ( res ) {
            this.valid_confirmed = true;
        }
    }
}

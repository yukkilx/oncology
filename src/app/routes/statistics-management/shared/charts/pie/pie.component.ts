import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.css']
})

export class PieComponent extends Options implements OnInit {

    option: any;
    ngOnInit() {
        this.option =  {
            title : {
                text: this.options.name,
                subtext: '',
                x: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                x : 'center',
                y: 'bottom',
                data: this.options.legend
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['pie', 'funnel']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : this.options.series
        };

        // for ( let i = 0; i < this.options.legend.length; i++) {
        //     const series_item = {
        //         name: this.options.legend[i],
        //         type: 'bar',
        //         data: this.options.series[i],
        //         markPoint : {
        //             data : [
        //                 {type : 'max', name: '最大值'},
        //                 {type : 'min', name: '最小值'}
        //             ]
        //         },
        //         markLine : {
        //             data : [
        //                 {type : 'average', name: '平均值'}
        //             ]
        //         }
        //     };
        //     this.option.series.push(series_item);
        // }

    }
    onChartEvent(event: any, type: string) {
        // console.log('chart event:', type, event);
    }
}

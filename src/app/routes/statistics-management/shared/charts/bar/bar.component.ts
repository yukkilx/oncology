import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';
@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})

export class BarComponent extends Options implements OnInit {

    option: any;
    ngOnInit() {


        this.option =  {
            // color: ['#3398D8', '#EE7700', '#00DDAA'],
            title : {
                text: this.options.name,
                subtext: ''
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data: this.options.legend
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : this.options.xAxis
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'black'
                    }
                }
            },
            series : [

            ]
        };
        if (this.options.color) {
           this.option.color = this.options.color;
        }
        if (this.options.ymin){
            this.option.yAxis[0].min = this.options.ymin;
        }

        for ( let i = 0; i < this.options.legend.length; i++) {
            const series_item = {
                name: this.options.legend[i],
                type: 'bar',
                data: this.options.series[i],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            };
            this.option.series.push(series_item);
        }

    }
    onChartEvent(event: any, type: string) {
        // console.log('chart event:', type, event);
    }
}

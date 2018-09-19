import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Options } from '../options';

@Component({
    selector: 'app-stackbar',
    templateUrl: './stackbar.component.html',
    styleUrls: ['./stackbar.component.css']
})

export class StackbarComponent extends Options implements OnInit {

    option: any;
    ngOnInit() {
        this.option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: this.options.legend
            },
            toolbox: {
                show : true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
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
            series : this.options.data
        };

    }
}

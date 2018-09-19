import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';
@Component({
    selector: 'app-singledot',
    templateUrl: './singledot.component.html',
    styleUrls: ['./singledot.component.css']
})

export class SingledotComponent extends Options implements OnInit {

    option: any;
    ngOnInit() {

        const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'];
        const days = ['20170303', '20170304', '20170305',
            '20170306', '20170307', '20170308', '20170309'];
        const data = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 1], [0, 10, 9], [0, 11, 16], [0, 12, 2], [0, 13, 0], [0, 14, 1], [0, 15, 0], [0, 16, 1], [0, 17, 0], [0, 18, 0], [0, 19, 0], [0, 20, 0], [0, 21, 0], [0, 22, 0], [0, 23, 0], [1, 0, 0], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 0], [1, 11, 1], [1, 12, 0], [1, 13, 0], [1, 14, 0], [1, 15, 0], [1, 16, 0], [1, 17, 0], [1, 18, 0], [1, 19, 0], [1, 20, 0], [1, 21, 0], [1, 22, 0], [1, 23, 0], [2, 0, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 1], [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 18, 0], [2, 19, 0], [2, 20, 0], [2, 21, 0], [2, 22, 0], [2, 23, 0], [3, 0, 0], [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 6], [3, 10, 10], [3, 11, 17], [3, 12, 8], [3, 13, 1], [3, 14, 3], [3, 15, 2], [3, 16, 1], [3, 17, 0], [3, 18, 0], [3, 19, 0], [3, 20, 0], [3, 21, 0], [3, 22, 0], [3, 23, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 0], [4, 6, 0], [4, 7, 0], [4, 8, 2], [4, 9, 13], [4, 10, 12], [4, 11, 14], [4, 12, 2], [4, 13, 0], [4, 14, 1], [4, 15, 6], [4, 16, 0], [4, 17, 0], [4, 18, 0], [4, 19, 0], [4, 20, 0], [4, 21, 0], [4, 22, 0], [4, 23, 0], [5, 0, 0], [5, 1, 0], [5, 2, 0], [5, 3, 0], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 6], [5, 10, 6], [5, 11, 6], [5, 12, 1], [5, 13, 0], [5, 14, 1], [5, 15, 2], [5, 16, 0], [5, 17, 0], [5, 18, 0], [5, 19, 0], [5, 20, 0], [5, 21, 0], [5, 22, 0], [5, 23, 0], [6, 0, 0], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 1], [6, 9, 6], [6, 10, 11], [6, 11, 5], [6, 12, 1], [6, 13, 2], [6, 14, 1], [6, 15, 3], [6, 16, 1], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 0], [6, 21, 0], [6, 22, 0], [6, 23, 0]];
        this.option =  {
            tooltip: {
                position: 'top'
            },
            title : [],
            singleAxis: [],
            series: []
        };

        for ( let i = 0; i < days.length; i++) {
            this.option.title.push({
                textBaseline: 'middle',
                top: (i + 0.5) * 100 / 7 + '%',
                text: days[i]
            });
            this.option.singleAxis.push({
                left: 150,
                type: 'category',
                boundaryGap: false,
                data: hours,
                top: (i * 100 / 7 + 5) + '%',
                height: (100 / 7 - 10) + '%',
                axisLabel: {
                    interval: 2
                }
            });
            this.option.series.push({
                singleAxisIndex: i,
                coordinateSystem: 'singleAxis',
                type: 'scatter',
                data: [],
                symbolSize: function (dataItem) {
                    return dataItem[1] * 4;
                }
            });
        }

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            this.option.series[item[0]].data.push([item[1], item[2]]);
        }
        // echarts.util.each(data, function (dataItem) {
        //     option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
        // });
        // for

    }
    onChartEvent(event: any, type: string) {
        // console.log('chart event:', type, event);
    }
}

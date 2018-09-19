import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';

@Component({
    selector: 'app-map',
    templateUrl: './mapd.component.html',
    styleUrls: ['./mapd.component.css']
})

export class MapdComponent extends Options implements OnInit {

    option: any;
    option2: any;
    ngOnInit() {
        this.option2 = {
            title: {
                // text: '乳腺癌患病分布',
                text: this.options.title,
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['乳腺恶性肿瘤', '乳腺良性肿瘤']
            },
            visualMap: {
                min: 1,
                max: 9.4,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },

            series: [
                {
                    name: '乳腺良性肿瘤',
                    type: 'map',
                    mapType: '陕西',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    // data:[{'value': 7.64, 'name': '西安市'}, {'value': 6.32, 'name': '咸阳市'}, {'value': 5.98, 'name': '
                    // 渭南市'}, {'value': 6.64, 'name': '延安市'}, {'value': 7.64, 'name': '铜川市'}, {'value': 8.23,
                    // 'name': '宝鸡市'}, {'value': 7.23, 'name': '榆林市'}, {'value': 6.32, 'name': '商洛市'},
                    // {'value': 5.64, 'name': '安康市'}, {'value': 4.32, 'name': '汉中市'}, {'value': 5.91, 'name': '兴平市'}]

                    // data: [{'value': 9.4, 'name': '西安市'}, {'value': 8.26, 'name': '咸阳市'},
                    //     {'value': 5.98, 'name': '渭南市'}, {'value': 5.32, 'name': '延安市'},
                    //     {'value': 5.29, 'name': '铜川市'}, {'value': 4.58, 'name': '宝鸡市'},
                    //     {'value': 3.91, 'name': '榆林市'}, {'value': 2.58, 'name': '商洛市'},
                    //     {'value': 1.58, 'name': '安康市'}, {'value': 1.58, 'name': '华阴市'},
                    //     {'value': 0.0, 'name': '汉中市'}, {'value': 0.0, 'name': '兴平市'}];

                    data:[{'value': 7.62, 'name': '西安市'}, {'value': 7.97, 'name': '咸阳市'},
                        {'value': 2.1, 'name': '渭南市'}, {'value': 3.1, 'name': '延安市'},
                        {'value': 2.02, 'name': '铜川市'}, {'value': 5.64, 'name': '宝鸡市'},
                        {'value': 5.91, 'name': '榆林市'}, {'value': 1.49, 'name': '商洛市'},
                        {'value': 2.64, 'name': '安康市'}, {'value': 1.32, 'name': '汉中市'},
                        {'value': 5.91, 'name': '兴平市'}]

                    // data: [
                    //     {name: '西安市', value: 200 },
                    //     {name: '咸阳市', value: 80 },
                    //     {name: '渭南市', value: 63 },
                    //     {name: '延安市', value: 100 },
                    //     {name: '铜川市', value: 200 },
                    //     {name: '宝鸡市', value: 300 },
                    //     {name: '榆林市', value: 150 },
                    //     {name: '商洛市', value: 80 },
                    //     {name: '安康市', value: 50 },
                    //     {name: '汉中市', value: 20 },
                    //     {name: '兴平市', value: 60 }
                    // ]
                }
            ]
        };
        this.option = {
            title: {
                // text: '乳腺癌患病分布',
                text: this.options.title,
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['乳腺恶性肿瘤', '乳腺良性肿瘤']
            },
            visualMap: {
                min: 1,
                max: 9.4,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },

            series: [
                {
                    name: '乳腺恶性肿瘤',
                    type: 'map',
                    mapType: '陕西',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    // data:[{'value': 7.64, 'name': '西安市'}, {'value': 6.32, 'name': '咸阳市'}, {'value': 5.98, 'name': '
                    // 渭南市'}, {'value': 6.64, 'name': '延安市'}, {'value': 7.64, 'name': '铜川市'}, {'value': 8.23,
                    // 'name': '宝鸡市'}, {'value': 7.23, 'name': '榆林市'}, {'value': 6.32, 'name': '商洛市'},
                    // {'value': 5.64, 'name': '安康市'}, {'value': 4.32, 'name': '汉中市'}, {'value': 5.91, 'name': '兴平市'}]

                    // data: [{'value': 9.4, 'name': '西安市'}, {'value': 8.26, 'name': '咸阳市'},
                    //     {'value': 5.98, 'name': '渭南市'}, {'value': 5.32, 'name': '延安市'},
                    //     {'value': 5.29, 'name': '铜川市'}, {'value': 4.58, 'name': '宝鸡市'},
                    //     {'value': 3.91, 'name': '榆林市'}, {'value': 2.58, 'name': '商洛市'},
                    //     {'value': 1.58, 'name': '安康市'}, {'value': 1.58, 'name': '华阴市'},
                    //     {'value': 0.0, 'name': '汉中市'}, {'value': 0.0, 'name': '兴平市'}];

                    data:[{'value': 9.62, 'name': '西安市'}, {'value': 8.97, 'name': '咸阳市'},
                        {'value': 3.5, 'name': '渭南市'}, {'value': 4.64, 'name': '延安市'},
                        {'value': 3.32, 'name': '铜川市'}, {'value': 5.64, 'name': '宝鸡市'},
                        {'value': 5.1, 'name': '榆林市'}, {'value': 4.49, 'name': '商洛市'},
                        {'value': 3.84, 'name': '安康市'}, {'value': 2.32, 'name': '汉中市'},
                        {'value': 6.51, 'name': '兴平市'}]

                    // data: [
                    //     {name: '西安市', value: 200 },
                    //     {name: '咸阳市', value: 80 },
                    //     {name: '渭南市', value: 63 },
                    //     {name: '延安市', value: 100 },
                    //     {name: '铜川市', value: 200 },
                    //     {name: '宝鸡市', value: 300 },
                    //     {name: '榆林市', value: 150 },
                    //     {name: '商洛市', value: 80 },
                    //     {name: '安康市', value: 50 },
                    //     {name: '汉中市', value: 20 },
                    //     {name: '兴平市', value: 60 }
                    // ]
                }
            ]
        };
        // console.log(this.options.legend.length);
        // for ( let i = 0; i < this.options.legend.length; i++) {
        //     const series_item = {
        //         name: this.options.legend[i],
        //         type: 'map',
        //         mayType: this.options.mapType[i],
        //         roam: false,
        //         label: {
        //             normal: {
        //                 show: true
        //             },
        //             emphasis: {
        //                 show: true
        //             }
        //         },
        //         data: this.options.series[i]
        //     };
        //     this.option.series.push(series_item);
        //     console.log(this.option);
        // }
    }
    onChartEvent(event: any, type: string) {
        // console.log('chart event:', type, event);
    }
}

import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';
@Component({
    selector: 'app-normalpie',
    templateUrl: './normalpie.component.html',
    styleUrls: ['./normalpie.component.css']
})

export class NormalpieComponent extends Options implements OnInit {
    option: any;
    ngOnInit() {
        this.option = {
            title: {
                text: this.options.name,
                subtext: '',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c}({d}%)'
            },
            legend: {
                orient: 'horizontal',
                x: 'center',
                data: this.options.legend
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: { funnel: {x: '25%'},
                            width: '50%',
                            funnelAlign: 'left'}},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : this.options.series

        };
    }

}

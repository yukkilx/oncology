import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.css']
})

export class OptionComponent extends Question implements OnInit {

    localAnswer = '';
    options = [];
    valid_confirmed = false;
    editdisabled = false;


    ngOnInit() {
        this.localAnswer = 'sss';
        this.options = this.question.content;
    }
    constructor() {
        super();
        this.localAnswer = '请点击选择';

    }
    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        }

        if (this.localAnswer !== '') {
            this.valid_confirmed = true;
            tem.Record_ID = this.question.dbId;
            tem.Record_Value = this.localAnswer;
            res.push(tem);
            this.answer = res;
        }
    }
}

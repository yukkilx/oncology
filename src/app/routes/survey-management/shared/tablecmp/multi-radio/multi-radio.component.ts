import { Component, OnInit } from '@angular/core';
import {Question} from "../../question";

@Component({
  selector: 'app-multi-radio',
  templateUrl: './multi-radio.component.html',
  styleUrls: ['./multi-radio.component.less']
})
export class MultiRadioComponent extends Question  implements OnInit {
    localAnswer = [];
    answerChanged = false;
    editdisabled = false;
    tf = ["否", "是"];
    answer;

    constructor() { super(); }

    ngOnInit() {
        for(let i=0;i<this.question.content.length;i++){
            this.localAnswer.push(-1);
        }
        // this.localAnswer= new Array(this.question.content.length);
    }

    answerChange() {
        const res = [];
        for (let row = 0; row < this.question.content.length; row ++) {  // 行
            if ( this.localAnswer[row] && this.localAnswer[row] !== '') {
                const item = {
                    Record_ID : '',
                    Record_Value: -1
                };
                item.Record_ID = this.question.id2[row];
                item.Record_Value = this.localAnswer[row];
                res.push(item);
            }
        }
        this.answer = res;
        if ( this.answerCheck() === true)
            this.answerChanged = true;
        else
            this.answerChanged = false;
    }

    answerCheck() {
        this.localAnswer.forEach(item => {
            if ( item !== '')
                return true;
        });
        return false;
    }
    getAnswer() {
        this.localAnswer = [];
        this.answerChange();
    }
}

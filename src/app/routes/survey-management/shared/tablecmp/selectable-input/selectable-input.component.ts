import { Component, OnInit } from '@angular/core';
import {Question} from "../../question";

@Component({
  selector: 'app-selectable-input',
  templateUrl: './selectable-input.component.html',
  styleUrls: ['./selectable-input.component.less']
})
export class SelectableInputComponent extends Question implements OnInit {

    localAnswer = [];
    answerChanged = false;
    editdisabled = false;
    answer;

    constructor() { super(); }

    ngOnInit() {
        // console.log(this.question);
        this.localAnswer= new Array(this.question.content.length);
    }

    answerChange() {
        const res = [];
        for (let row = 0; row < this.question.content.length; row ++) {  // 行
            if ( this.localAnswer[row] && this.localAnswer[row] !== '') {
                const item = {
                    Record_ID : '',
                    Record_Value: ''
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

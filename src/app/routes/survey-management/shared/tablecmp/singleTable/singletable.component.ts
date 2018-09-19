import {Component, OnInit} from '@angular/core';
import {Question} from '../../question';
@Component({
    selector: 'app-single',
    templateUrl: './singletable.component.html',
    styleUrls: ['./singletable.component.css']
})


export class SingletableComponent extends Question implements OnInit {
    localAnswer = [];
    answerChanged = false;
    editdisabled = false;
    totalRow: number;
    levelRow: number;

    constructor() {
        super();

    }
    ngOnInit() {
        this.localAnswer = new Array(this.question.rawname.length);
        this.totalRow = this.question.totalRow;
        if (this.question.levelRow) {
            this.levelRow = this.question.levelRow;
        }
    }
    answerChange() {
        const res = [];

        for (let row = 0; row < this.question.rawname.length; row ++) {  // 行
            if ( this.localAnswer[row] !== '' && this.localAnswer[row]) {
                const item = {
                    Record_ID : '',
                    Record_Value: ''
                }
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
        for ( let i = 0; i < this.localAnswer.length; i++) {
            if (this.localAnswer[i] && this.localAnswer[i] !== '' ) {
                   return true;
            }
        }
        return false;
    }

    check() {
        this.answerChange();
        console.log(this.localAnswer);
        console.log(this.answer);
    }

    getTotal(e: any) {
        let total = 0;
        for (let i = 0; i < this.totalRow; i++) {
            if (!this.localAnswer[i]) {
            } else {
                total = total + parseFloat(this.localAnswer[i]);
            }
        }
        console.log(total);
        this.localAnswer[this.totalRow] = total;
    }

    getLevel() {
        if (this.levelRow) {
            this.question.levelDetail.forEach(d => {
                if (this.localAnswer[this.totalRow] > d.min && this.localAnswer[this.totalRow] <= d.max) {
                    this.localAnswer[this.levelRow] = d.level;
                }
            });
        }
    }
}

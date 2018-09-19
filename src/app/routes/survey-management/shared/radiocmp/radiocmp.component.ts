import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Question } from '../question';


@Component({
    selector: 'app-radiocmp',
    templateUrl: './radiocmp.component.html',
    styleUrls: ['./radiocmp.component.less']
})
export class RadiocmpComponent extends Question {
    localAnswer = -1;
    @Output() onVoted = new EventEmitter< any >();
    valid_confirmed = false;
    editdisabled = false;
    constructor() {
        super();
    }
    vote ( hiddenList: any [], hiddenshowList: any[] ) {
        const showAndhidden = {
            'hiddenlist': hiddenList,
            'hiddenshowlist' : hiddenshowList
        }
        this.onVoted.emit(showAndhidden);
    }

    answerChange() {
        let hiddenshowlist = [];
        for (let i = 0; i < this.question.content.length; i++) {
            if ( this.localAnswer !== i) {
                if (this.question.hiddenlist.length !== 0)
                    hiddenshowlist = hiddenshowlist.concat(this.question.hiddenlist[i]);
            }
        }
        if ( this.question.hiddenlist.length !== 0)
            if ( this.localAnswer !== -1)
                if (this.question.hiddenlist[this.localAnswer].length !== 0 || hiddenshowlist.length !== 0) {
                    this.vote(this.question.hiddenlist[this.localAnswer], hiddenshowlist);
                }
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: -1
        }

        if (this.localAnswer !== -1) {
            this.valid_confirmed =  true;
            const questionID = this.question.dbId;
            tem.Record_ID = questionID;
            tem.Record_Value = this.localAnswer;
            res.push(tem);
            this.answer = res;
        }

    }
}

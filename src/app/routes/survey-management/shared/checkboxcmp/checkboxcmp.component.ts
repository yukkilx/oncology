import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Question } from '../question';
import { AnswerInterface } from '../answerInterface';


@Component({
    selector: 'app-checkboxcmp',
    templateUrl: './checkboxcmp.component.html',
    styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question implements OnInit {// 继承自Question类，
    localAnswer;
    valid_confirmed = false;
    editdisabled = false;
    @Output() onVoted = new EventEmitter < any > ();
    ngOnInit() {
        this.localAnswer = new Array(this.question.content.length);
        for (let i = 0; i < this.localAnswer.length; i++) {
            this.localAnswer[i] = false;
        }
    }
    constructor() {
        super();
    }
    vote ( hiddenList: any [], hiddenshowList: any[] ) {
        const showAndhidden = {
            'hiddenlist': hiddenList,
            'hiddenshowlist' : hiddenshowList
        };
        this.onVoted.emit(showAndhidden);
    }
    answerChange() {

        // if ( this.question.id === '10.3') {
        //     let flag = false;
        //     for ( let i = 0; i < this.question.content.length; i++) {
        //         if ( this.localAnswer[i] === true ) {
        //             flag =  true;
        //             break;
        //         }
        //     }
        //     if ( flag === false ) {
        //         this.vote( this.question.hiddenlist[0], []);
        //     }else {
        //         this.vote(  [], this.question.hiddenlist[0]);
        //     }
        // }
        // if ( this.question.id === '6.14') {
        //     if ( this.localAnswer[3] !== true) {
        //         this.vote( this.question.hiddenlist[0], []);
        //     }else {
        //         this.vote( [], this.question.hiddenlist[0]);
        //     }
        // }
        // if ( this.question.id === '7.4.f') {
        //     if ( this.localAnswer [8] === true) {
        //         this.vote([],  this.question.hiddenlist[0]);
        //     }else {
        //         this.vote(this.question.hiddenlist[0], []);
        //     }
        // }
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: []
        };
        tem.Record_ID = this.question.dbId;
        for (let index = 0; index < this.question.content.length; index++ ) {
            if (this.localAnswer[index] && this.localAnswer[index] === true) {
                tem.Record_Value.push(index);
            }
        }
        this.answer = res;
        if (this.question.required) {
            for ( let i = 0; i < this.localAnswer.length; i++ ) {
                if (this.localAnswer[i] && this.localAnswer[i] === true) {
                    this.valid_confirmed = true;
                    break;
                }
            }
        } else {
            this.valid_confirmed = true;
        }

        let hiddenlist = [];
        let hiddenshowlist = [];
        if (this.question.hiddenlist && this.question.hiddenlist.length !== 0) {
            for ( let i = 0 ; i < this.localAnswer.length; i++) {
                if ( this.localAnswer[i] && this.localAnswer[i] === true ) {
                    hiddenlist = hiddenlist.concat(this.question.hiddenlist[i]);
                } else {
                    hiddenshowlist = hiddenshowlist.concat(this.question.hiddenlist[i]);
                }
            }
            this.vote( hiddenlist, hiddenshowlist);
        }
    }
}

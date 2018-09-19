/**
 * Created by th3ee on 1/10/18.
 */
/**
 * Created by th3ee on 1/10/18.
 */
import { Component, OnInit } from '@angular/core';
import { Question } from '../../survey-management/shared/question';

@Component({
    selector: 'app-table53',
    templateUrl: './table53.component.html'
})
export class Table53Component extends Question implements OnInit {

    startStr = 'ec';
    column: number;
    row: number;
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowLength = 4;
    rowTitle = ['胸部CT', '肺灌注显像', '肺动脉CTA'];
    secondLevelTitle = [];
    changedAnswer = [];
    overallId = ['ea7a1', 'ea7a2', 'ea7a3', 'ea7a4'];
    overallContent = ['', '', '', ''];
    /**
     * 存储问题是否填写的变量,默认false
     */
    answerChanged = false;

    constructor() {
        super();
    }

    ngOnInit() {
        this.column = this.rowLength;
        this.row = this.rowTitle.length;
        for (let i = 97; i < 97 + this.column; i++) {
            this.letterArray.push(String.fromCharCode(i));
        }
        this.initArray();
        this.initId();
        // console.log(this.letterArray);
        // console.log(this.initialArray);
        // console.log(this.idArray);
    }

    initArray() {
        for (let row = 0; row < this.row; row++) {
            this.initialArray.push([]);
            for (let column = 0; column < this.column; column++) {
                this.initialArray[row].push('');
            }
        }
    }

    initId() {
        for (let row = 0; row < this.row; row++) {
            this.idArray.push([]);
            this.letterArray.forEach(l => {
                    this.idArray[row].push(this.startStr + (row + 1) + l);
            });
        }
    }


    getAnswer() {
        this.changedAnswer = [];
        this.setAnswer(this.initialArray, this.idArray, this.row, this.column);
        // console.log(this.changedAnswer);
    }

    setAnswer(blank: any, idArray: any, row: number, column: number) {
        if (row > 1) {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    if (blank[i][j] !== '') {
                        this.changedAnswer.push({
                            Record_ID: idArray[i][j],
                            Record_Value: blank[i][j]
                        });
                    }
                }
            }
        } else {
            for (let i = 0; i < column; i++) {
                if (blank[i] !== '') {
                    this.changedAnswer.push({
                        Record_ID: idArray[i],
                        Record_Value: blank[i]
                    });
                }
            }
        }
        if ( this.answerCheck() === true)
            this.answerChanged = true;
        else
            this.answerChanged = false;
    }

    answerCheck() {
        for ( let i = 0; i < this.changedAnswer.length; i++) {
            if (this.changedAnswer[i] && this.changedAnswer[i] !== '' ) {
                return true;
            }
        }
        return false;
    }
}

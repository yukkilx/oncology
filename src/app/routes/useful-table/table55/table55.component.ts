/**
 * Created by th3ee on 1/11/18.
 */
/**
 * Created by th3ee on 1/9/18.
 */
import { Component, OnInit } from '@angular/core';
import { Question } from '../../survey-management/shared/question';

@Component({
    selector: 'app-table55',
    templateUrl: './table55.component.html'
})
export class Table55Component extends Question implements OnInit {

    startStr = 'ef';
    column: number;
    row: number;
    selectableCol = 3;
    selectableArray = ['尿蛋白质', '尿葡萄糖', '尿酮体', '尿白细胞', '尿隐血', '大便隐血'];
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowTitle = ['第一次', '第二次', '第三次'];
    columnTitle = ['比重', 'PH值', '尿蛋白质', '尿葡萄糖', '尿酮体', '尿白细胞', '尿隐血', '大便隐血'];
    changedAnswer = [];
    /**
     * 存储问题是否填写的变量,默认false
     */
    answerChanged = false;

    constructor() {
        super();
    }

    ngOnInit() {

        this.column = this.columnTitle.length;
        this.row = this.rowTitle.length;
        for (let i = 97; i < 97 + this.row; i++) {
            this.letterArray.push(String.fromCharCode(i));
        }
        this.initArray();
        this.initId();
        console.log(this.letterArray);
        console.log(this.initialArray);
        console.log(this.idArray);
    }

    initArray() {
        for (let row = 0; row < this.row; row++) {
            this.initialArray.push([]);
            for (let column = 0; column < this.column + this.column - this.selectableCol + 1 ; column++) {
                this.initialArray[row].push('');
            }
        }
    }

    initId() {
        for (let row = 0; row < this.row; row++) {
            this.idArray.push([]);
            for (let column = 0; column < this.column; column++) {
                if (column < (this.selectableCol - 1))
                this.idArray[row].push(this.startStr + (column + 1) + this.letterArray[row]);
                else {
                    this.idArray[row].push(this.startStr + (column + 1) + this.letterArray[row]);
                    this.idArray[row].push(this.startStr + (column + 1) + this.letterArray[row] + this.letterArray[row]);
                }
            }
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
                for (let j = 0; j < column + column - this.selectableCol + 1; j++) {
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

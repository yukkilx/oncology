import { Component, OnInit } from '@angular/core';
import { Question } from '../../survey-management/shared/question';

@Component({
    selector: 'app-table54',
    templateUrl: './table54.component.html'
})
export class Table54Component extends Question implements OnInit {

    changedAnswer = [];
    initialArray = ['', '', '', '', '', '', '', '', '', '',
        '', '',
        '',
        '', '', '',
        '', '', '', '',
        '',
        '',
        '',
        '', '',
        '', '',
        '', ''
    ];

    idArray = ['eda1', 'eda2', 'eda3', 'eda4', 'eda5', 'eda6', 'eda7', 'eda8', 'eda9', 'eda10',
        'ed1a', 'ed1b',
        'ed2',
        'ed3a', 'ed3b', 'ed3c',
        'ed4a', 'ed4b', 'ed4c', 'ed4d',
        'ed5',
        'ed6',
        'ed7',
        'ed8', 'ed8a',
        'ed10a', 'ed10b',
        'ed11a', 'ed11b'
    ];

    /**
     * 存储问题是否填写的变量,默认false
     */
    answerChanged = false;

    constructor() {
        super();
    }

    ngOnInit() {
    }




    getAnswer() {
        this.changedAnswer = [];
        this.setAnswer();
        // console.log(this.changedAnswer);
    }

    setAnswer() {
      for (let i = 0; i < this.initialArray.length; i++) {
          if (this.initialArray[i] !== '') {
              this.changedAnswer.push({
                  Record_ID: this.idArray[i],
                  Record_Value: this.initialArray[i]
              });
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

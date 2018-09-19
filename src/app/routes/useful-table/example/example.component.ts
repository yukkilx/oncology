import { Component, OnInit } from '@angular/core';
import { Question } from '../../survey-management/shared/question';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less']
})
export class ExampleComponent extends Question implements OnInit {

    startStr = 'ea';
    column = 20;
    row = 6;
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowTitle = [ '走行(1:正常,2:异常)', '内径(1:正常,2:变宽,3:变窄)', '宫腔(1:清晰,2:不清晰，可见暗淡回声填充,3:完全闭塞)', '静脉压缩性(1:好,2:差)', '侧枝(1:可见侧枝形成,2:无侧枝形成)', '静脉瓣功能(1:良好,2:关闭不全)'];
    columnTitle = ['髂外静脉', '股总静脉', '股浅静脉', '股深静脉', '腘静脉', '胫后静脉', '胫前静脉', '大隐静脉', '腓静脉', '肌间静脉'];
    columnTitle_2 = ['左', '右'];
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

      for (let i = 97; i < 97 + this.column; i++) {
          this.letterArray.push(String.fromCharCode(i));
      }
      this.initArray();
      this.initId();
      this.initTitle2();
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

  initTitle2() {
    for (let i = 0; i < this.column / 2; i++) {
       this.secondLevelTitle = this.secondLevelTitle.concat(this.columnTitle_2);
    }
    // console.log(this.columnTitle_2);
  }

  getAnswer() {
      this.changedAnswer = [];
      this.setAnswer(this.initialArray, this.idArray, this.row, this.column);
      this.setAnswer(this.overallContent, this.overallId, 1, 4);
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

import { Component, OnInit } from '@angular/core';
import {Question} from "../../question";
import {ngWalkerFactoryUtils} from "codelyzer/angular/ngWalkerFactoryUtils";

@Component({
  selector: 'app-table64',
  templateUrl: './table64.component.html',
  styleUrls: ['./table64.component.less']
})
export class Table64Component extends Question implements OnInit {

    changedAnswer = [];
    answerChanged = false;
    editdisabled = false;

    mazui = ["局麻+心电血压监护", "全麻+心电血压监护"];
    chuanci = ["足背静脉", "股静脉", "股动脉", "其它"];
    rawname1 = ["胫后静脉","胫前静脉","腓静脉","腘静脉","股浅静脉","股静脉","髂静脉","髂外静脉","髂总静脉","大隐静脉"];
    rawname2 = ["肺动脉主干压力","右肺动脉","左肺动脉","肺楔压","右室压力","右房压力"];
    tf = ["否", "是"];
    // array0 = new Array(3);
    array1;array2;
    // array3 = new Array(6);
    // gcpa = new Array(4);
    // gcpb = new Array(4);
    jmpart = ["腰1", "腰2"];
    initialArray = new Array(57);

    idArray = [
        'gca', 'gcb', 'gcc', 'gcc1', 'gcc2',
        'gcd1', 'gce1', 'gcf1', 'gcg1', 'gch1', 'gci1', 'gcj1', 'gck1', 'gcl1', 'gcm1', 'gcd2', 'gce2', 'gcf2', 'gcg2',  'gch2', 'gci2', 'gcj2', 'gck2', 'gcl2', 'gcm2',
        'gcn', 'gco1', 'gco2', 'gco3', 'gco4', 'gcp',
        'gcpa1', 'gcpa2', 'gcpa3', 'gcpa4', 'gcpa5', 'gcpa6', 'gcpa7',
        'gcpb1', 'gcpb2', 'gcpb3', 'gcpb4', 'gcpb5', 'gcpb6', 'gcpb7',
        'gcq1', 'gcr1', 'gcs1', 'gct1', 'gcu1', 'gcv1', 'gcq2', 'gcr2', 'gcs2', 'gct2', 'gcu2', 'gcv2'
    ];

  constructor() { super(); }

  ngOnInit() {
      this.array1 = new Array(2);
      for (let i = 0; i < this.array1.length; i++) { this.array1[i] = new Array(this.rawname1.length); }
      this.array2 = new Array(2);
      for (let i = 0; i < this.array2.length; i++) { this.array2[i] = new Array(this.rawname2.length); }
      for(let i=0;i<this.initialArray.length;i++){
          if(i == 0 || i==2 || (27<i&&i<43)){
              this.initialArray[i] = -1;
          }
      }
      // console.log('his.initialArray');
      // console.log(this.initialArray);
  }

    getAnswer() {
        this.changedAnswer = [];
        this.setAnswer();
        // console.log(this.changedAnswer);
    }

    setAnswer() {
      for (let i = 0; i < this.initialArray.length; i++) {
            if (this.initialArray[i] && this.initialArray[i] !== '') {
                if(i == 0 || i==2 || (27<i&&i<43)){
                this.changedAnswer.push({
                    Record_ID: this.idArray[i],
                    Record_Value: this.initialArray[i]
                });
            }else {
                    this.changedAnswer.push({
                        Record_ID: this.idArray[i],
                        Record_Value: this.initialArray[i]
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
            if (this.changedAnswer[i] && this.changedAnswer[i].Record_Value !== '' && this.changedAnswer[i].Record_Value !== -1) {
                return true;
            }
        }
        return false;
    }
}

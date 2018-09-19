import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';
import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';
import {CheckboxcmpComponent} from '../shared/checkboxcmp/checkboxcmp.component';
import {DatecmpComponent} from '../shared/datecmp/datecmp.component';
import {AddrcmpComponent} from '../shared/addrcmp/addrcmp.component';
import {IdccmpComponent} from '../shared/idccmp/idccmp.component';
import {HighTableComponent} from '../../useful-table/high-table/high-table.component';
import {OptionComponent} from '../shared/optioncmp/option.component';
import {SaveList} from '../shared/example';
import {ScheduleList} from '../shared/scheduleList';

@Component({
    selector: 'app-singlepg',
    templateUrl: './singlePg.component.html',
    styleUrls: ['./singlePg.component.less']
})
export class SinglePgComponent implements OnInit, AfterViewInit  {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(CheckboxcmpComponent) CheckItem: QueryList<CheckboxcmpComponent>;
    @ViewChildren(DatecmpComponent) DateItem: QueryList<DatecmpComponent>;
    @ViewChildren(AddrcmpComponent) AddrItem: QueryList<AddrcmpComponent>;
    @ViewChildren(IdccmpComponent) IdcItem: QueryList<IdccmpComponent>;
    @ViewChildren(HighTableComponent) HighTableItem: QueryList<HighTableComponent>;
    @ViewChildren(OptionComponent) OptionItem: QueryList<OptionComponent>;
    current = 0; // 当前步骤
    exampleList = new SaveList().questions;
    steps = new SaveList().step_key;

    qlist = [];     // 当前页问题列表
    b = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];                      // 填写结果
    fillingList = [];                     // 请求的键值对
    answerList = [];
    PID;                                  // PID
    finished = false;
    buttondisable = false;

    department = 'test1';
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private confirmServ: NzModalService,
        private ref: ChangeDetectorRef
    ) {

        this.PID = this.route.params['value']['PID'];
        if (this.PID) {
            const getRecord = {
                'PID': this.PID
            };
            this.qlist = this.exampleList[this.steps[this.current]]['items'];
        } else {
            this.qlist = this.exampleList[this.steps[this.current]]['items'];
            console.log(this.qlist);
        }
    }
    ngOnInit() {

    }

    ngAfterViewInit() {
        if ( this.PID ) {
            this.fillingAllanswer();
        }
    }

    onVoted (showAndhidden: any) {
        for ( let i = 0; i <  showAndhidden.hiddenshowlist.length; i++) {
            for ( let j = 0; j < this.qlist.length; j++) {
                if ( this.qlist[j].webId === showAndhidden.hiddenshowlist[i] ) {
                    this.qlist[j]['hidden'] = false;
                }
            }
        }
        for (let i = 0; i < showAndhidden.hiddenlist.length; i++) {
            for ( let j = 0; j < this.qlist.length; j++) {
                if ( this.qlist[j].webId === showAndhidden.hiddenlist[i] ) {
                    this.qlist[j]['hidden'] = true;
                }
            }
        }
    }
    initputRecord() {

        this.collectAllanswer();
        let putRecord  = {};
        if (this.PID ) {
            putRecord = {
                'Records' : this.resultList,
                'step_key': this.steps[this.current],
                'Department': this.department,
                'PID' : this.PID
            };
        }else {
            putRecord = {
                'Records' : this.resultList,
                'step_key': this.steps[this.current],
                'Department': this.department,
                'PID' : ''
            };
        }
        return putRecord;
    }
    jumpTo(step_index , footer) {
        const numWords = ['info0', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
        if (step_index !== this.current) { // 如果有病人编号，则跳跃
            this.current = step_index;
            console.log(this.current);
            console.log(this.exampleList);
            this.qlist = this.exampleList[this.steps[this.current]]['items'];
            if (this.PID) {
                this.fillingAllanswer();
            }
        }
    }

    next() {
        if ( (this.current + 1) < this.steps.length) {
            this.service.putRecords(this.initputRecord()).subscribe((res) => {
                console.log(res);
                this.PID = res.PID;
                this.current++; // 这里注意，一定要在putrecord之后，再加current。
                this.qlist = this.exampleList[this.steps[this.current]]['items'];
                this.fillingAllanswer(); // 这里我们需要再次调用fillingAllanswer，获取新子页面下的数据。
            }, err => {
                console.log(err);
            });
        }
    }
    pre() {
        if (this.current > 0) {
            this.service.putRecords(this.initputRecord()).subscribe((res) => {
                console.log(res);
                this.PID = res.PID;
                this.current--; // 这里注意，一定要在putrecord之后，再减current。
                this.qlist = this.exampleList[this.steps[this.current]]['items'];
                this.fillingAllanswer(); // 这里我们需要再次调用fillingAllanswer，获取新子页面下的数据。

            }, err => {
                console.log(err);
            });
        }

    }
    temporary_deposit() {
        this.service.putRecords(this.initputRecord()).subscribe((res) => {
            console.log(res);
            this.router.navigate(['system/survey/detail']);
        }, err => {
            console.log(err);
        });
    }

    exit() {                                            // 退出
        this.router.navigate( ['system/survey/detail/']);
    }

    confirm() {
        const confirmlist = []; // 验证列表
        let confirmnum = 0;
        let confirms = true;
        this.InputItems.forEach(item => {
            confirmnum ++;
            if (item.question.required === true) {
                if ( item.question.hidden === false && item.valid_confirmed === false) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.RadioItems.forEach(item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.IdcItem.forEach( item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.CheckItem.forEach( item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false ) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.DateItem.forEach(item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false ) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.AddrItem.forEach(item => {
            confirmnum ++;
            if (item.question.hidden === false && item.valid_confirmed === false ) {
                confirms = false;
                confirmlist.push(item.question.webId);
            }
        });

        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist,
            confirmP: confirmlist.length / confirmnum,
        } ;
        return confirmAll;
    }
    collectAllanswer() {
        this.resultList.splice(0, this.resultList.length);
        this.RadioItems.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.InputItems.forEach(item => {
            if (item.valid_confirmed === true) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.CheckItem.forEach(item => {
            const answers = [];
            console.log(item.localAnswer);
            for (let i = 0; i < item.localAnswer.length; i++) {
                if (item.localAnswer[i]) {
                    answers.push(item.question.content[i]);
                }
            }
            this.resultList.push({
                Record_ID: item.question.dbId,
                Record_Value: answers.join(',')
            });
        });

        this.DateItem.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });

        this.AddrItem.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.IdcItem.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.HighTableItem.forEach(item => {
            item.getAnswer();
            for (let i = 0; i < item.changedAnswer.length; i++) {
                this.resultList.push(item.changedAnswer[i]);
            }
        });
        this.OptionItem.forEach(item => {
            if (item.valid_confirmed === true) {
                for ( let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });

        // for (let i = 0; i < this.answerList.length; i++) {
        //     for (let j = 0; j < this.resultList.length; j++) {
        //         const id = this.resultList[j].Record_ID;
        //         if (this.answerList[i][id] || this.answerList[i][id] === 0) {
        //             this.resultList[j]['Updated_time'] = this.answerList[i]['Updated_time'];
        //         }
        //     }
        // }
        console.log(this.resultList);
    }

    disabledAll() {
        // this.buttondisable = true;
        // this.InputItems.forEach(item => {
        //     item.editdisabled = true;
        // });
        // this.RadioItems.forEach(item => {
        //     item.editdisabled = true;
        // });
        // this.CheckItem.forEach(item => {
        //     item.editdisabled = true;
        // });
    }
    fillingAllanswer() {

        const getRecord = {
            'PID': this.PID,
            'Department': this.department,
            'step_keys': [this.steps[this.current]]
            // 'step_keys': ['one']
        }; // 构造我们需要的查询条件
        console.log(getRecord);
        // 下面开始获取所有当前子页面的数据
        this.service.getRecordpart(getRecord).subscribe((res) => {

            if (JSON.stringify(res.Records) !== ('{}')) {
                console.log(res);
                console.log(res.Records);
                console.log(JSON.stringify(res.Records));
                // let answers_bucket = new Array(res.Record[this.steps[this.current]]);

                const  answers_bucket = res.Records[this.steps[this.current]];
                // console.log(answers_bucket);

                // answer_bucket是我们获取到的所有当前子页面的回填答案，下面需要将他们依次放回各个组件。
                // console.log(answers_bucket);
                // // answers_bucket = answers_bucket[0];
                // console.log('))))');
                // console.log(answers_bucket);

                // 所有hightable类型的数据获取

                this.HighTableItem.forEach(item => {
                    console.log(answers_bucket);
                    const newArray = [];
                    const newInital = [];
                    for (const answer of answers_bucket) {
                        if (answer.Record_ID.substr(0, 3) === item.id_title) {
                            console.log(answer.Record_ID.substr(0, 3));
                            newArray.push({
                                Record_ID: answer.Record_ID,
                                Record_Value: answer.Record_value
                            });
                        }
                    }
                    console.log(newArray);
                    for (let row = 0; row < item.row; row++) {
                        newInital.push([]);
                        for (let column = row * item.column; column < (row + 1) * item.column; column++ ) {
                            newInital[row].push(newArray[column]);
                        }
                    }
                    if (item.overall) {
                        newInital.push(newArray[newArray.length - 1]);
                    }
                    item.initialArray = newInital;
                });

                this.RadioItems.forEach(item => {
                    for (const answer of answers_bucket) {
                        if (answer.Record_ID === item.question.dbId) {
                            console.log(item.question.dbId);
                            item.localAnswer = +answer.Record_value;
                        }
                    }
                });
                this.OptionItem.forEach(item => {
                    for (const answer of answers_bucket) {
                        if (answer.Record_ID === item.question.dbId) {
                            console.log(item.question.dbId);
                            item.localAnswer = answer.Record_value;
                        }
                    }
                });

                this.InputItems.forEach(item => {
                    console.log(item.question.dbId);
                    for (let i = 0 ; i < answers_bucket.length; i++) {
                        const answer = answers_bucket[i];
                        if (answer.Record_ID === item.question.dbId) {
                            console.log(item.question.dbId);
                            item.localAnswer = answer.Record_value;
                        }
                    }
                });

                this.IdcItem.forEach(item => {
                    for (const answer of answers_bucket) {
                        if (answer.Record_ID === item.question.dbId) {
                            console.log(item.question.dbId);
                            item.localAnswer = answer.Record_value;
                        }
                    }
                });

                this.DateItem.forEach(item => {
                    for (const answer of answers_bucket) {
                        if (answer.Record_ID === item.question.dbId) {
                            console.log(answer.Record_value);
                            const date = new Date(answer.Record_value);
                            console.log(date);
                            item.date = date;
                        }
                    }
                });

                this.CheckItem.forEach(item => {
                    const newLocal = [];
                    for (const answer of answers_bucket) {
                        if (answer.Record_ID === item.question.dbId) {
                            const options = answer.Record_value.split(',');
                            item.question.content.forEach(option => {
                                if (options.indexOf(option) > -1) {
                                    newLocal.push(true);
                                } else {
                                    newLocal.push(false);
                                }
                            });
                            item.localAnswer = newLocal;
                        }
                    }
                });

                this.AddrItem.forEach(item => {
                    for (const answer of answers_bucket) {
                        if (answer.Record_ID === item.question.dbId) {
                            const answerSet = answer.Record_value.split(' ');
                            const newInit = [];
                            answerSet.forEach(section => {
                                if (section.split(',').length > 1) {
                                    newInit.push(section.split(',')[1]);
                                } else {
                                    newInit.push(section);
                                }
                            });
                            console.log(newInit);
                            item.initArray = newInit;
                        }
                    }
                });
            }
            // 在这里，继续补充其他类型部件。
        });
    }

}


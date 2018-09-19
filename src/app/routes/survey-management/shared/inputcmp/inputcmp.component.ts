import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Question } from '../question';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-inputcmp',
    templateUrl: './inputcmp.component.html',
    styleUrls: ['./inputcmp.component.css']
})
export class InputcmpComponent extends Question implements OnInit {
    localAnswer = ''; // 存储数据
    valid_confirmed = false;
    validateForm: FormGroup;
    editdisabled = false;

    min_value = -1;
    max_value = -1;
    number_len = -1;
    text_len = -1;

    @Output() onVoted = new EventEmitter< any >();

    ngOnInit() {
        this.validateForm = this.fb.group(
            {
                text: ['', [this.textValidator]],
                len_text: ['', [this.len_textValidator]],
                number: ['', [this.numberValidator]],
                len_number: ['', [this.len_numberValidator]],
            }
        );
    }
    textValidator = ( control: FormControl): { [s: string]: boolean } => {
        // return { 'required': true };
        if ((!control.value) && this.question.required) {
            this.valid_confirmed = false;
            return {required: true};
        }else {
            this.valid_confirmed = true;
        }
    }
    len_textValidator = ( control: FormControl): { [s: string]: boolean } => {
       // return { 'required': true };
        if (!control.value) {
            if (this.question.required) {
                this.valid_confirmed = false;
                return {required: true};
            } else {
                this.valid_confirmed = true;
            }
        }else {
            if (this.question.validcondition.length) {
                if (control.value.length > this.question.validcondition.length) {
                    this.valid_confirmed = false;
                    this.text_len = this.question.validcondition.length;
                    return { error: true, len_text: true };
                } else {
                    this.valid_confirmed = true;
                }
            } else {
                console.log('Json 不合法,必须指定输入长度,或者使用text验证类型！');
            }
        }
    }
    numberValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            if (this.question.required === true) {
                this.valid_confirmed = false;
                return {required: true};
            } else {
                this.valid_confirmed = true;
            }
        }else {
            if (this.question.validcondition.max !== (null) && this.question.validcondition.min !== null) {
                const value = parseFloat(control.value);
                if (this.question.validcondition.max > value && this.question.validcondition.min < value &&
                    NUM_REGEXP.test(control.value)) {
                    this.valid_confirmed = true;
                } else {
                    this.valid_confirmed = false;
                    this.max_value = this.question.validcondition.max;
                    this.min_value = this.question.validcondition.min;
                    return { error: true, number: true };
                }
            } else {
                console.log('Json 不合法,必须指定范围,或者使用text验证类型！');
            }
        }
    }
    len_numberValidator = ( control: FormControl): { [s: string]: boolean } => {
        // return { 'required': true };
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            if (this.question.required) {
                this.valid_confirmed = false;
                return {required: true};
            } else {
                this.valid_confirmed = true;
            }
        }else {
            if (this.question.validcondition.length) {
                if (this.question.validcondition.length === control.value.length &&  NUM_REGEXP.test(control.value)) {
                    this.valid_confirmed = true;
                } else {
                   this.valid_confirmed = false;
                   this.number_len = this.question.validcondition.length;
                   return { error: true, len_number: true };
                }
            } else {
                console.log('Json 不合法,必须指定数字长度,或者使用text验证类型！');
            }
        }
    }
    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }

    constructor(private fb: FormBuilder) {
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
        let hiddenlist = []
        if ( this.question.hiddencondition && this.question.hiddencondition.length !== 0) {
            for ( let i = 0; i < this.question.hiddencondition.length; i++) {
                if ( this.localAnswer !== this.question.hiddencondition[i]) {
                    hiddenshowlist = hiddenshowlist.concat(this.question.hiddenlist[i]);
                } else {
                    hiddenlist = hiddenlist.concat(this.question.hiddenlist[i]);
                }
            }
            this.vote(hiddenlist, hiddenshowlist);
        }

        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        };
        const questionID = this.question.dbId;
        tem.Record_ID = questionID;
        tem.Record_Value = this.localAnswer;
        res.push(tem);
        this.answer = res;
    }
}

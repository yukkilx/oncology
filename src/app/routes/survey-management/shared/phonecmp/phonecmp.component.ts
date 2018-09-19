import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-phonecmp',
    templateUrl: './phonecmp.component.html',
    styleUrls: ['./phonecmp.component.css']
})
export class PhoneComponent extends Question {
    localAnswer = ''; // 存储数据
    answerChanged = false;
    editdisabled = false;
    validateForm: FormGroup;
    flag = false;
    pwdOrtext = 'password';
    Onclick = function() {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.pwdOrtext = 'text';
        }else {
            this.pwdOrtext = 'password';
        }
    };
    phoneVaildator = (control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /(^\d{11})$/;
        if (!control.value) {;
            this.answerChanged = false;
            return {required: true};
        }else if ( !NUM_REGEXP.test(control.value) ) {
            this.answerChanged = false;
            return { error: true, phone: true};
        }else {
            this.answerChanged = true;
        }
    }
    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }
    constructor(private fb: FormBuilder) {
        super();
        this.validateForm = this.fb.group(
            {
                phone: ['', [ this.phoneVaildator]]
            }
        );
    }
    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        };
        const questionID = 'ID' + this.question.id.replace(/\./g , '_');
        tem.Record_ID = questionID;
        tem.Record_Value = this.localAnswer;
        res.push(tem);
        this.answer = res;
    }
}

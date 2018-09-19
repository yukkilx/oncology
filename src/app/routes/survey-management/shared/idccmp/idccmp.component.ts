import { Component } from '@angular/core';
import { Question } from '../question';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'app-idccmp',
    templateUrl: './idccmp.component.html',
    styleUrls: ['./idccmp.component.css']
})
export class IdccmpComponent extends Question {
    localAnswer; // 存储数据
    valid_confirmed = false;
    validateForm: FormGroup;
    editdisabled = false;
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
    IDCVaildator = (control: FormControl): { [s: string]: boolean } => {
        const IDC_REGEXP = /((^\d{18}$)|(^\d{17}(\d|X|x)$))/;
        if (!control.value) {
            this.valid_confirmed = false;
            return {required: true};
        } else if (control.value.length !== 18 || !IDC_REGEXP.test(control.value)) {
            this.valid_confirmed = false;
            return {error: true, idc: true};
        }else {
            this.valid_confirmed = true;
        }
    }
    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }
    constructor(private fb: FormBuilder) {
        super();
        this.validateForm = this.fb.group(
            {
                idc: ['', [ this.IDCVaildator]]
            }
        );
    }
    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        }
        tem.Record_ID = this.question.dbId;
        tem.Record_Value = this.localAnswer;
        res.push(tem);
        this.answer = res;
    }
}

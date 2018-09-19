import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Question} from "../../question";

@Component({
  selector: 'app-auto-inc-input',
  templateUrl: './auto-inc-input.component.html',
  styleUrls: ['./auto-inc-input.component.less']
})
export class AutoIncInputComponent extends Question implements OnInit {

    validateForm: FormGroup;

    localAnswer = [];
    answerChanged = false;
    editdisabled = false;
    answer;

    addField(e?: MouseEvent) {
        if (e) {
            e.preventDefault();
        }
        const id = (this.localAnswer.length > 0) ? this.localAnswer[this.localAnswer.length - 1].id + 1 : 1;

        const control = {
            id,
            controlInstance: `${this.question.id2}${id}`
        };
        const index = this.localAnswer.push(control);
        // console.log(this.localAnswer[this.localAnswer.length - 1]);
        this.validateForm.addControl(this.localAnswer[index-1].controlInstance, new FormControl(null, Validators.required));
    }

    removeField(i, e: MouseEvent) {
        e.preventDefault();
        if (this.localAnswer.length > 1) {
            const index = this.localAnswer.indexOf(i);
            this.localAnswer.splice(index, 1);
            console.log(this.localAnswer);
            this.validateForm.removeControl(i.controlInstance);
        }
    }

    getFormControl(name) {
        return this.validateForm.controls[name];
    }

    answerChange() {
        const res = [];
        // console.log(this.localAnswer);
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            // console.log(this.validateForm.controls[i]);
            if( this.validateForm.controls[i]){
                const item = {
                    Record_ID:i,
                    Record_Value:this.validateForm.value[i]
                };
                res.push(item);
            }
        }
        this.answer = res;
        // console.log(this.validateForm.value);
        console.log(this.answer);
    }

    constructor(private fb: FormBuilder) { super() }

    ngOnInit() {
        // console.log(this.localAnswer);
        this.validateForm = this.fb.group({});
        this.addField();
    }

}

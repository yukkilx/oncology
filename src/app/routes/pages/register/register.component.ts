import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';
import { Observable } from 'rxjs/Observable';
import { LoginAuthService } from '@core/services/login.auth.service';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpService } from '@core/services/http.service';

const UserData = {
    'email': '',
    'real_name': '',
    'password': '',
    'province': '陕西',
};

@Component({
  selector: 'app-pages-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  valForm: FormGroup;
  constructor(public settings: SettingsService,
              fb: FormBuilder,
              private router: Router,
              private service: LoginAuthService,
              private msg: NzMessageService,
              private httpService: HttpService,
  ) {
    this.valForm = fb.group({
      email: [null, Validators.compose([Validators.required])],
      real_first_name: [null],
      real_last_name: [null],
      password: [null, Validators.required],
      province: ['陕西', Validators.required],
    });
  }

  submit() {
    // tslint:disable-next-line:forin
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(this.valForm.value);
      const submitBody = {
          'province': this.valForm.value.province,
          'username': this.valForm.value.email,
          'first_name': this.valForm.value.real_first_name,
          'last_name': this.valForm.value.real_last_name,
          'password': this.valForm.value.password,
          'email': 'abc@163.com'
      };
      console.log(submitBody);
     this.httpService.register(submitBody)
         .subscribe((res) => {
         console.log(res);
         if (res.Return === 0) {
             this.msg.info(res.Result);
             this.router.navigate(['']);
         } else {
             this.msg.info(res.Result);
         }
     });
    }
  }
    loadData() {
        Observable.of(UserData)
            .delay(1000)
            .subscribe(data => {
                this.valForm.reset(data);
            });
    }
}

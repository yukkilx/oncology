import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';
import { HttpService } from '@core/services/http.service';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-pages-lock',
  templateUrl: './lock.component.html'
})
export class LockComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService,
              fb: FormBuilder,
              private router: Router,
              private msg: NzMessageService,
              private service: HttpService,

  ) {
    this.valForm = fb.group({
      password: [null, Validators.required]
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
        this.router.navigate(['system/user/setting']);

        this.service.login({
            'username': sessionStorage.getItem('User_name'),
            'password': this.valForm.value.password
        })/*.subscribe((resp) => {
            console.log(resp);
            if (resp.Return === 0) {
                this.router.navigate([sessionStorage.getItem('back_url')]);
            } else {
                this.msg.info('密码错误');
            }
        })*/;
        this.router.navigate([sessionStorage.getItem('back_url')]);
    }
  }


}

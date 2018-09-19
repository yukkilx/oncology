import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';
import { HttpService } from '@core/services/http.service';
import { LoginAuthService } from '@core/services/login.auth.service';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService,
              fb: FormBuilder,
              private msg: NzMessageService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: LoginAuthService,
              private service: HttpService) {
    this.valForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      remember_me: [null]
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
    }
    console.log(this.valForm.value);
    const FormVal = {
        'username': this.valForm.value.username,
        'password': this.valForm.value.password
    };
    this.router.navigate(['../system']);
      this.service.login(FormVal);
      /*.subscribe((resp) => {
          console.log(resp);

          console.log('login success');
          if (resp.Return === 0) {
              const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
              console.log(redirect);
              this.router.navigate([redirect]);
          } else {
              this.msg.info(resp.Result);
          }
      });*/
    /*this.authService.loginObservable(FormVal).subscribe(
          (res) => {
              console.log(this.valForm.value);
              console.log(res);
              if (res.TOKEN) {
                  const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/user/setting';
                  this.router.navigate([redirect]);
                  console.log(localStorage.getItem('TOKEN'));
                  /!*this.authService.getUsers().subscribe(
                      (response) => {
                          console.log(response);
                      }
                  );*!/
              }
          });*/
  }
}

/**
 * Created by th3ee on 11/15/17.
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { Record, HttpService } from '@core/services/http.service';

@Injectable()
export class RecordResolverGuard implements Resolve<Record> {
constructor(private service: HttpService, private router: Router) {}
localInfo = JSON.parse(localStorage.getItem('_user'));
localUser = this.localInfo.user_name;
localProvince = this.localInfo.user_province;
localGroup = this.localInfo.user_group;
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Record> {
    const id = route.paramMap.get('PID');

    return this.service.getRecordInfo(id).take(1).map((res) => {
        console.log(res);
        console.log('getting id');
        console.log(this.localGroup);
        if (this.localGroup === 4) {
            if (res.Complete_by === this.localInfo.user_name) {
                console.log(res.Complete_by);
                console.log(this.localInfo.user_name);
                return res;
            } else {
                console.log(res.Complete_by);
                console.log(this.localInfo.user_name);
                console.log(this.router);
                this.router.navigate(['system/survey/detail']);
                console.log('redirect');
                return null;
            }
        } else if (this.localGroup !== 1) {
          return  res.Province === this.localProvince ? res : null;
        } else return res;
    });
}
}

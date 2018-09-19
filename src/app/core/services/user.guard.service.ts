/**
 * Created by th3ee on 11/22/17.
 */
/**
 * Created by th3ee on 11/7/17.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';

@Injectable()
export class UserAuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkGroup(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    checkGroup(url: string): boolean {
        if (localStorage.getItem('_user')) {
            if (JSON.parse(localStorage.getItem('_user')).user_group < '3')
            return true;
        }
       // this.router.navigate([url]);
        return false;
    }
}

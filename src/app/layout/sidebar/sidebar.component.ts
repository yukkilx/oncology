import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SettingsService } from '@core/services/settings.service';

@Component({
  selector   : 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

    localInfo = JSON.parse(localStorage.getItem('_user'));
    constructor(public settings: SettingsService, public msgSrv: NzMessageService) {
        settings.user.name = this.localInfo.name;
        settings.user.email = this.localInfo.user_province;
    }

    removeLocalInfo() {
        localStorage.removeItem('_user');
    }
}

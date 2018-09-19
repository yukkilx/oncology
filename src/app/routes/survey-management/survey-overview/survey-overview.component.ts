import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { FileDownloadService } from '@core/services/fileDownload.service';
import {Initdb} from '../../database-management/database-setting/Initdb';

@Component({
    selector: 'app-survey-overview',
    templateUrl: './survey-overview.component.html',
    styleUrls: ['./survey-overview.component.less']
})
export class SurveyOverviewComponent implements OnInit {

    localInfo = JSON.parse(localStorage.getItem('_user'));
    loggedUser = this.localInfo.user_name;
    userGroup = this.localInfo.user_group;
    userProvince = this.localInfo.user_province;
    PID = '';
    constructor(
        private service: HttpService,
        private route: ActivatedRoute,
        private router: Router,
        private fileDownloader: FileDownloadService,
    ) { }

    pi = 1;
    ps = 10;
    total = 200; // mock total
    loading = false;
    args = {};
    _indeterminate = false;
    _allChecked = false;
    start_time = null; // 开始时间
    end_time = null;   // 结束时间
    data = [];
    sortMap = {
        Name: null,
        No: null,
        Updated_time: null
    };
    // 所有的过滤条件在这个对象里添加
    conditions = {
        'filter_dict': {
            'Updated_time': []
        },
        'Department': 'test1',
        'sorted_key': 'PID',
        'start': (this.pi - 1) * this.ps,
        'offset': this.ps,
    };

    ngOnInit() {
        this.getTableData(true);
    }

    // 改变分页和页数
    changePage() {
        this.conditions.start = (this.pi - 1) * this.ps;
        this.conditions.offset = this.ps;
    }

    showConditions() {
        this.pi = 1;
        this.conditions.start = 0;
        this.getTableData(true);
    }

    clear() {
        for (const key in this.conditions.filter_dict) {
            if (this.conditions.filter_dict[key])
                delete this.conditions.filter_dict[key];
        }
        this.start_time = null;
        this.end_time = null;
        this.pi = 1;
        this.conditions.start = 0;
        this.getTableData(true);
    }

    getTableData(pageChange: boolean) {
        this.setTime();
        if (pageChange) {
            this.changePage();
        }
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        // 进行对应的数据的查找

        this.service.getList(this.conditions).subscribe( (res) => {
            this.data = res.PID_info;
            this.data.map(d => d + 1);
            console.log(this.data);
            this.total = res.Count;
            this.loading = false;
        });
    }


    // 时间格式转换
    GMTToStr(time) {
        const date = new Date(time);
        const Str = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
        return Str;
    }

    // 时间设置
    setTime() {
        if (this.start_time === null || this.end_time === null) {
            delete this.conditions.filter_dict.Updated_time;
        } else {
            this.conditions.filter_dict.Updated_time = [];
            this.conditions.filter_dict.Updated_time.push(this.GMTToStr(this.start_time));
            this.conditions.filter_dict.Updated_time.push(this.GMTToStr(this.end_time));
        }
    }


    deleteRecord(pid: string) {
        if (pid && pid !== '') {
            const deleteId = { 'PID': pid };
            this.service.deleteRecord(deleteId).subscribe((res) => {
                this.getTableData(true);
            });
        }
    }
    isVisible( data ): boolean {
        if (this.userGroup === '4') {
            return true;
        } else if (this.userGroup === '3' || '2') {
            return data.province === this.userProvince;
        } else if (this.userGroup === '1') {
            return data.completedBy === this.loggedUser;
        }
    }

    /**
     *
     * @param PID 根据pid下载单个数据
     */
    downloadByPID(PID) {
        console.log(PID);
        const filePath = 'vascular/exportcsv/';
        const fileName = 'PID' + PID + '.csv';
        const PIDs = [PID];  // 单个元素
        this.fileDownloader.downloadFile(filePath, {'PID_list': [PID]}, fileName);
    }

    generateByPID(PID) {
        console.log(PID);
        const filePath = 'vascular/exportdocx/';
        const fileName = 'PID' + PID + '.docx';
        const PIDs = [PID];  // 单个元素
        this.fileDownloader.downloadFile(filePath, {'PID': PID}, fileName);
    }

    /**
     * 下载当前页面所有记录
     */
    downloadAll() {
        const PIDs = this.data.map(item => {  // 遍历读取表格中的pid，并合成list
            return item.PID;
        });
        const filePath = 'vascular/exportcsv/';
        this.fileDownloader.downloadFile(filePath, {'PID_list': PIDs}, 'All.csv');
    }

    /**
     * 下载选中内容
     */
    downSelected() {
        const PIDs = [];
        this.data.forEach(item => {
            if (item.checked) {
                PIDs.push(item.PID);
            }
        });
        const filePath = 'vascular/exportcsv/';
        this.fileDownloader.downloadFile(filePath, {'PID_list': PIDs}, '已选.csv');
    }

    sort(title, value) {
        console.log(value);
        if (value === 'ascend')
            this.conditions.sorted_key = title;
        else this.conditions.sorted_key = '-' + title;
        Object.keys(this.sortMap).forEach(key => {
            if (key !== title) {
                this.sortMap[ key ] = null;
            } else {
                this.sortMap[ key ] = value;
            }
        });
        this.getTableData(true);
    }

    _checkAll() {
        this.data.forEach(item => item.checked = this._allChecked);
        this.refChecked();
    }
    refChecked() {
        const checkedCount = this.data.filter(w => w.checked).length;
        this._allChecked = checkedCount === this.data.length;
        this._indeterminate = this._allChecked ? false : checkedCount > 0;
    }
}














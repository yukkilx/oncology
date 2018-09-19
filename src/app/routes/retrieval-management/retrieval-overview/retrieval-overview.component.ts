import { Component, OnInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { FileDownloadService } from '@core/services/fileDownload.service';
import { Initdb } from '../../database-management/database-setting/Initdb';

@Component({
    selector: 'app-retrieval-overview',
    templateUrl: './retrieval-overview.component.html',
    styleUrls: ['./retrieval-overview.component.css']

})
export class RetrievalOverviewComponent implements OnInit {


    // searchOptions;
    condition_type = ['病案号', '姓名', '性别', '年龄（岁）', '出生日期', '科主任签名', '主任（副主任）医师签名', '主治医师签名',
        '住院医师签名', '入院科别', '入院日期时间', '入院途径', '入院途径代码', '门（急）诊诊断名称', '门（急）诊诊断疾病编码',
        '是否急危重病例', '是否疑难病例', '抢救次数', '成功次数', '手术者姓名', '手术者代码', '麻醉方式代码', '手术及操作名称',
        '手术及操作编码', '手术及操作日期', '手术级别代码', '手术切口类别', '手术切口类别代码', '切口愈合等级', '切口愈合等级代码',
        '出院日期时间', '出院科别', '出院诊断-主要诊断名称', '出院诊断-主要诊断疾病编码', '损伤中毒的外部原因', '损伤中毒的外部原因疾病编码',
        '出院诊断-其他诊断疾病编码', '出院诊断-其他诊断疾病编码2', '出院诊断-其他诊断疾病编码3', '出院诊断-其他诊断疾病编码4',
        '出院诊断-其他诊断疾病编码5', '出院诊断-其他诊断疾病编码6', '出院诊断-其他诊断疾病编码7', '出院诊断-其他诊断疾病编码8',
        '出院诊断-主要诊断入院病情名称', '出院诊断-主要诊断入院病情代码', '离院方式', '医疗付费方式', '住院总费用',
        '住院总费用-自付金额', '实际住院天数', '住院次数'];
    condition_type_to_ = { '实际住院天数': 'sjzyts',
        '出院日期时间': 'cyrqsj', '住院总费用-自付金额': 'zyzfyzfje', '是否疑难病例': 'sfynbl',
        '出院诊断-其他诊断疾病编码2': 'cyzdqtzdjbbm2', '成功次数': 'cgcs', '损伤中毒的外部原因': 'sszddwbyy',
        '门（急）诊诊断名称': 'mjzzdmc', '住院总费用': 'zyzfy', '年龄（岁）': 'nl', '手术切口类别代码': 'ssqklbdm',
        '出院诊断-主要诊断名称': 'cyzdzyzdmc', '手术者代码': 'sszdm', '出院诊断-主要诊断疾病编码': 'cyzdzyzdjbbm',
        '手术及操作名称': 'ssjczmc', '科主任签名': 'kzrqm', '入院途径代码': 'rytjdm',
        '出院诊断-其他诊断疾病编码5': 'cyzdqtzdjbbm5', '入院途径': 'rytj', '入院日期时间': 'rysj', '入院科别': 'rykb',
        '出院诊断-其他诊断疾病编码7': 'cyzdqtzdjbbm7', '切口愈合等级': 'qkyhdj', '手术切口类别': 'ssqklb',
        '切口愈合等级代码': 'qkyhdjdm', '出院诊断-其他诊断疾病编码6': 'cyzdqtzdjbbm6', '性别': 'xb', '麻醉方式代码': 'mzfsdm',
        '手术者姓名': 'sszxm', '手术及操作日期': 'ssjczrq', '是否急危重病例': 'sfjwzbl', '住院次数': 'zycs',
        '主治医师签名': 'zzysqm', '出生日期': 'csrq', '离院方式': 'lyfs', '主任（副主任）医师签名': 'zrysqm',
        '出院诊断-主要诊断入院病情名称': 'cyzdzyzdrybqmc', '出院科别': 'cykb', '病案号': 'bah', '抢救次数': 'qjcs',
        '住院医师签名': 'zyysqm', '姓名': 'xm', '手术及操作编码': 'ssjczbm', '出院诊断-主要诊断入院病情代码': 'cyzdzyzdrybqdm',
        '出院诊断-其他诊断疾病编码8': 'cyzdqtzdjbbm8', '出院诊断-其他诊断疾病编码': 'cyzdqtzdjbbm',
        '医疗付费方式': 'ylfffs', '损伤中毒的外部原因疾病编码': 'sszddwbyyjbbm', '出院诊断-其他诊断疾病编码3': 'cyzdqtzdjbbm3',
        '手术级别代码': 'ssjbdm', '出院诊断-其他诊断疾病编码4': 'cyzdqtzdjbbm4', '门（急）诊诊断疾病编码': 'mjzzdjbbm'};
    department = 'test1';
    conditions: any = [
        {
            add_remove: true,
            ico: 'anticon anticon-plus',
            condition_type: '入院科别',
            selectedMultipleOption: [],
            andOrnot: true,
            searchOptions: []
        }
    ];

    add_ico = 'anticon anticon-plus';
    remove_ico = 'anticon anticon-minus';



    /* table data variable*/
    data = [{Pid: 0, No: 12345}]
    pi = 1;
    ps = 10;
    total = 200; // mock total
    constructor(
        private jsonp: Jsonp,
        private service: HttpService
    ) {
    }
    ngOnInit() {

    }

    searchChange(searchText, item) {
        const query = encodeURI(searchText);
        const getRecord = {
            'Department': this.department,
            'record_type': this.condition_type_to_[item.condition_type],
            'key_word': searchText
        };

        this.service.getSelectvalues(getRecord).subscribe((res) => {
            console.log('关键字搜索', res);
            const search_values = res.values;
            item.searchOptions = []
            for (const value of search_values) {
                item.searchOptions.push([value]);
            }

        });
    }
    selectChange(selectText, item) {
        if (item.condition_type === '性别') {
            item.searchOptions = [ ['男'], ['女'], ['未记录'] ];
        }
        if (item.condition_type === '是否急危重病例' || item.condition_type === '是否疑难病例') {
            item.searchOptions = [ ['是'], ['否'], ['不详'] ];
        }
        if (item.condition_type === '医疗付费方式') {
            item.searchOptions = [ ['新型农村合作医疗'], ['城镇职工基本医疗保险'], ['城镇居民基本医疗保险'], ['全自费'], ['全公费'],
                ['其他社会保险'], ['商业医疗保险'], ['其他'], ['不详'] ];
        }
    }
    add_remove_click(item) {
        if ( item.add_remove === true) {

            this.conditions.push(
                {
                    add_remove: false,
                    ico: this.remove_ico,
                    condition_type: '入院科别',
                    selectedMultipleOption: [],
                    andOrnot: true,
                    searchOptions: []
                }
            );
        } else {

            const index = this.conditions.indexOf(item)
            this.conditions.splice(index, 1);
        }
    }

    retrieval() {
        const And_conditions = [];
        const Not_conditions = [];
        for (const item of this.conditions ){
            const con = { fields: item.condition_type, element: []}
            for (const selected of item.selectedMultipleOption) {
                con.element.push(selected);
            }
            if (item.andOrnot) {
                And_conditions.push(con);
            }else {
                Not_conditions.push(con);
            }
        }

        console.log(And_conditions);
        console.log(Not_conditions);
    }

    getTableData(pageChange: boolean) {

    }

    downloadByPID(PID) {

    }

    generateByPID(PID) {

    }

    /**
     * 下载当前页面所有记录
     */
    downloadAll() {

    }

    /**
     * 下载选中内容
     */
    downSelected() {

    }


}














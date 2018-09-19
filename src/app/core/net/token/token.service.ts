import { Injectable } from '@angular/core';
import { TokenData } from './token.type';

import {NzMessageService} from 'ng-zorro-antd';

/** 存储键 */
const KEY = '_user';
/**
 * 基于Token认证，在前后端分离非常普通，本身只提供一个接口的形式展示如果优雅处理HTTP请求
 */
@Injectable()
export class TokenService {
    private msg: NzMessageService;
    /**
     * 保存
     */
    set data(token: TokenData) {
        localStorage.setItem(KEY, JSON.stringify(token));
    }

    /**
     * 获取
     */
    get data(): TokenData {
        return (JSON.parse(localStorage.getItem(KEY) || '{}') || {}) as TokenData;
    }

    logout() {
        localStorage.removeItem(KEY);
        console.log('logout');
    }
    //
    // set msgData() {
    //     this.msg
    // }
    get msgData() {
        return this.msg;
    }
}

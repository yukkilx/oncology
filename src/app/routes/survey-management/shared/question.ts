import { Input } from '@angular/core';

export class Question {
    @Input() question: any;  // 问题输入
    answer: any;  // 答案输入，查看问卷的时候使用
}

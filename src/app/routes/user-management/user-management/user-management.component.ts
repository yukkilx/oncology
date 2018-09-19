import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService} from 'ng-zorro-antd';
import { ManageModelCustomComponent } from './management.modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

    constructor(public msg: NzMessageService, private modal: NzModalService) {

    }

    options = {};

    charactors = [
         {
            name: '赫尔克里 波洛',
            url: '../assets/img/polo.jpg',
            job: '著名侦探',
            introduction: '波洛是伟大的侦探，但又有高处不胜寒的感觉。他曾爱过一个女人，而在遇到无法解开的破案难题时，波洛会在车厢内掏出他珍藏的相框，对着照片中的女人自言自语，有着孤独而深情的一面。',
            experience: '波洛乘上东方快车，夜间三次被吵醒，第二天清晨便发现同车的美国富商雷切尔被人谋杀，死者被戳了12刀。大侦探赫尔克里·波洛根据他所观察到的各种可疑迹象以及同车人士的讯问，并结合美国实行的12人陪审团制度等情况进行逻辑推理，成功地揭开了这起奇案的面纱。'
        },
        {
            name: '哈伯德夫人',
            url: '../assets/img/lady.jpg',
            job: '舞蹈家',
            introduction: '哈伯德夫人一位艳光四射、同时也身怀秘密的乘客。她又邪又媚，幽默、轻浮，在关键时刻有着情绪饱满的爆发力。',
            experience: '哈伯德夫人其实是几年前阿姆斯特朗惨案的最大受害者之一，阿姆斯特朗夫人正是她的亲女儿。作为这次谋杀案的主谋，哈伯德夫人谋划和组织了一切，并将自己伪装成金发的，以此来消除波洛对她身份的怀疑。'
        },
        {
            name: '列车长布克',
            url: '../assets/img/book.jpg',
            job: '东方号列车长',
            introduction: '布克是东方号列车的列车长，波洛的好朋友。他是一名正义，称职的列车长，对于发生在自己列车上的凶杀案件非常震惊，并下定决心请求波洛帮助破案。',
            experience: '布克在发现雷切特死在列车上后，恳请休假中的波洛帮忙破案。原因在于当时的社会舆论可能会将凶手指向车上的拉丁裔和非裔乘客，布克不希望看到这样的结果发生。整个探案过程中一直协助和保护波洛，在最后得知真相后，布克感到大吃一惊。'
        }
    ];
  ngOnInit() {
  }

    customCompModel(size: '' | 'lg' | 'sm' = '', charactor: object, url: string) {
        this.options = {
            wrapClassName: size ? 'modal-' + size : '',
            content: ManageModelCustomComponent,
            footer: false,
            componentParams: {
                charactor: charactor,
                url: url
            }
        };
        this.modal.open(this.options).subscribe(result => {
          //  this.msg.info(`subscribe status: ${JSON.stringify(result)}`);
        });
    }

}

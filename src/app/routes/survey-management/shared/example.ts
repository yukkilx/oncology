export class SaveList {
    step_key = ['step_one', 'step_two', 'step_three'];
    questions = {
        'step_one': {
            'name': 'step_one',
            'items': [
                {
                    'webId':  '1',
                    'dbId': 'bah',
                    'type': 'input',
                    'front_title': '病案号',
                    'behind_title': '',
                    'validtype': 'len_number',
                    'validcondition': {
                        'length': 6
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '2',
                    'dbId': 'xm',
                    'type': 'input',
                    'front_title': '姓名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                // {
                //
                //     'webId': '26',
                //     'dbId': 'xb',
                //     'type': 'radio',
                //     'front_title': '性别',
                //     'behind_title': '',
                //     'required': true,
                //
                //     'content': [
                //         '男', '女', '未记录'
                //     ],
                //     'hiddenlist': [
                //
                //     ],
                //
                //     'hidden': false
                // },
                {

                    'webId': '26',
                    'dbId': 'xb',
                    'type': 'option',
                    'front_title': '性别',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '男', '女', '未记录'
                    ],
                    'hiddenlist': [

                    ],

                    'hidden': false
                },
                {
                    'webId':  '3',
                    'dbId': 'nl',
                    'type': 'input',
                    'front_title': '年龄(岁)',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 150
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '4',
                    'dbId': 'csrq',
                    'type': 'date',
                    'front_title': '出生日期',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId': '',
                    'dbId': 'xzz',
                    'type': 'addr',
                    'front': '现住址',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '17',
                    'dbId': 'kzrqm',
                    'type': 'input',
                    'front_title': '科主任签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '18',
                    'dbId': 'zrysqm',
                    'type': 'input',
                    'front_title': '主任(副主任)医师签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '19',
                    'dbId': 'zzysqm',
                    'type': 'input',
                    'front_title': '主治医师签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '20',
                    'dbId': 'zyysqm',
                    'type': 'input',
                    'front_title': '住院医师签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                }
            ]
        },
        'step_two': {
            'name': 'step_two',
            'items': [
                {
                    'webId':  '5',
                    'dbId': 'rykb',
                    'type': 'input',
                    'front_title': '入院科别',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '6',
                    'dbId': 'rysj',
                    'type': 'date',
                    'front_title': '入院日期时间',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '9',
                    'dbId': 'rytj',
                    'type': 'input',
                    'front_title': '入院途径',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '10',
                    'dbId': 'rytjdm',
                    'type': 'input',
                    'front_title': '入院途径代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '9',
                    'dbId': 'mjzzdmc',
                    'type': 'input',
                    'front_title': '门（急）诊诊断名称',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '9',
                    'dbId': 'mjzzdjbbm',
                    'type': 'input',
                    'front_title': '门（急）诊诊断疾病编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '21',
                    'dbId': 'sfjwzbl',
                    'type': 'option',
                    'front_title': '是否急危重病例',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '是', '否', '不详'
                    ],
                    'hiddenlist': [

                    ],
                    'hidden': false
                },
                {
                    'webId': '22',
                    'dbId': 'sfynbl',
                    'type': 'option',
                    'front_title': '是否疑难病例',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '是', '否', '不详'
                    ],
                    'hiddenlist': [

                    ],
                    'hidden': false
                },
                {
                    'webId':  '23',
                    'dbId': 'qjcs',
                    'type': 'input',
                    'front_title': '抢救次数',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 100
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '24',
                    'dbId': 'cgcs',
                    'type': 'input',
                    'front_title': '成功次数',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 100
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '11',
                    'dbId': 'sszxm',
                    'type': 'input',
                    'front_title': '手术者姓名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '11',
                    'dbId': 'sszdm',
                    'type': 'input',
                    'front_title': '手术者代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '11',
                    'dbId': 'mzfsdm',
                    'type': 'input',
                    'front_title': '麻醉方式代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '11',
                    'dbId': 'ssjczmc',
                    'type': 'input',
                    'front_title': '手术及操作名称',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '11',
                    'dbId': 'ssjczbm',
                    'type': 'input',
                    'front_title': '手术及操作编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '12',
                    'dbId': 'ssjczrq',
                    'type': 'date',
                    'front_title': '手术及操作日期',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '11',
                    'dbId': 'ssjbdm',
                    'type': 'input',
                    'front_title': '手术级别代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '15',
                    'dbId': 'ssqklb',
                    'type': 'input',
                    'front_title': '手术切口类别',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '15',
                    'dbId': 'ssqklbdm',
                    'type': 'input',
                    'front_title': '手术切口类别代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '16',
                    'dbId': 'qkyhdj',
                    'type': 'input',
                    'front_title': '切口愈合等级',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '16',
                    'dbId': 'qkyhdjdm',
                    'type': 'input',
                    'front_title': '切口愈合等级代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                }
            ]
        },
        'step_three': {
            'name': 'step_three',
            'items': [
                {
                    'webId': '7',
                    'dbId': 'cyrqsj',
                    'type': 'date',
                    'front_title': '出院日期时间',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '8',
                    'dbId': 'cykb',
                    'type': 'input',
                    'front_title': '出院科别',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '9',
                    'dbId': 'cyzdzyzdmc',
                    'type': 'input',
                    'front_title': '出院诊断-主要诊断名称',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '10',
                    'dbId': 'cyzdzyzdjbbm',
                    'type': 'input',
                    'front_title': '出院诊断-主要诊断疾病编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '32',
                    'dbId': 'sszddwbyy',
                    'type': 'input',
                    'front_title': '损伤中毒的外部原因',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'sszddwbyyjbbm',
                    'type': 'input',
                    'front_title': '损伤中毒的外部原因疾病编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm2',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码2',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm3',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码3',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm4',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码4',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm5',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码5',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm6',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码6',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm7',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码7',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'cyzdqtzdjbbm8',
                    'type': 'input',
                    'front_title': '出院诊断-其他诊断疾病编码8',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {
                    'webId':  '14',
                    'dbId': 'cyzdzyzdrybqmc',
                    'type': 'input',
                    'front_title': '出院诊断-主要诊断入院病情名称',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '14',
                    'dbId': 'cyzdzyzdrybqdm',
                    'type': 'input',
                    'front_title': '出院诊断-主要诊断入院病情代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '28',
                    'dbId': 'lyfs',
                    'type': 'input',
                    'front_title': '离院方式',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {
                    'webId': '25',
                    'dbId': 'ylfffs',
                    'type': 'option',
                    'front_title': '医疗付费方式',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '新型农村合作医疗', '城镇职工基本医疗保险', '城镇居民基本医疗保险', '全自费', '全公费',
                        '其他社会保险', '商业医疗保险', '其他', '不详'
                    ],
                    'hiddenlist': [

                    ],
                    'hidden': false
                },
                {

                    'webId':  '29',
                    'dbId': 'zyzfy',
                    'type': 'input',
                    'front_title': '住院总费用',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {

                    'webId':  '29',
                    'dbId': 'zyzfyzfje',
                    'type': 'input',
                    'front_title': '住院总费用-自付金额',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {

                    'webId':  '30',
                    'dbId': 'sjzyts',
                    'type': 'input',
                    'front_title': '实际住院天数',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '31',
                    'dbId': 'zycs',
                    'type': 'input',
                    'front_title': '住院次数',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                }
                // {
                //     'webId':  '33',
                //     'dbId': 'option',
                //     'type': 'option',
                //     'front_title': 'test option',
                //     'behind_title': '',
                //
                //     'length': '',
                //     'required': true,
                //     'hiddenlist': [],
                //     'hiddencondition': [],
                //     'hidden': false
                // }
            ]
        }
    };

}




// [
//     {
//         'webId':  '1',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是number类型',
//         'behind_title': '',
//         'validtype': 'number',
//         'validcondition': {
//             'min': 0,
//             'max': 60
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId':  '2',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是len_number类型',
//         'behind_title': '',
//         'validtype': 'len_number',
//         'validcondition': {
//             'length': 12
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId':  '3',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是text类型',
//         'behind_title': '',
//         'validtype': 'text',
//         'validcondition': {
//
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId':  '4',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是len_text类型',
//         'behind_title': '',
//         'validtype': 'len_text',
//         'validcondition': {
//             'length': 12
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId': '5',
//         'dbId': 'sex',
//         'type': 'radio',
//         'front_title': '性别',
//         'behind_title': '',
//         'required': true,
//         'content': [
//             '男', '母'
//         ],
//         'hiddenlist': [
//             ['6'],
//             ['3']
//         ],
//         'hidden': false
//     },
//     {
//         'webId': '6',
//         'dbId': 'sex',
//         'type': 'addr',
//         'front_title': '联系人地址',
//         'behind_title': '',
//         'required': true,
//         'content': [
//             '男', '母'
//         ],
//         'hidden': false
//     },
//     {
//         'webId': '7',
//         'dbId': 'ID_number',
//         'type': 'idc',
//         'front_title': '身份证',
//         'behind_title': '',
//         'required': true,
//         'hidden': false
//     }
// ]
// // 前端每次取出item,创建一个副本,只负责显示,在用户收集完内容后,将hidden的状态和内容传递到后端，后端存储的是 step_name, 内容, 是否显示
// {
//     'dbId': '',
//     'webId': '7',
//     'title': '血常规', // 标题
//     'hidden': false,
//     'type': 'high-table',
//     'rowTitle': ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次', '第八次', '第九次', '第十次'], // 各行标题，也就是最左一列
//     'columnTitle': ['RBC', 'WBC', 'Hb', 'PLT109/', 'NEUT', 'NEUT%', 'LYMPH', 'LYMPH%', 'MONO', 'MONO%'], // 各列标题，也就是最上面一行
//     'id_title': 'xcg', // 数据库中存储的前缀
//     'table_type': 'mix', // 表格类型，表示是混合表格，既有input，又有radio(mix)
//     'radio_setting': { // radio 的设置
//     'direction': 'column',  // radio 的分布类型，是以列分布还是以行分布
//         'index': [ 1, 2, 4 ], // 哪几行（列）是radio
//         'options': [{value: '1', display_value: '是'}, {value: '2', display_value: '否'}, {value: '3', display_value: '不明'}]
//     // radio的选项都有什么，对应的值是什么
// },
//     'overall': true // 表格是否有总体评价的文字框
// },
// ]
// {
//     'dbId': '',
//     'webId': '7',
//     'title': '血常规', // 标题
//     'hidden': false,
//     'type': 'high-table',
//     'rowTitle': ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次', '第八次', '第九次', '第十次'], // 各行标题，也就是最左一列
//     'columnTitle': ['RBC', 'WBC', 'Hb', 'PLT109/', 'NEUT', 'NEUT%', 'LYMPH', 'LYMPH%', 'MONO', 'MONO%'], // 各列标题，也就是最上面一行
//     'id_title': 'xcg', // 数据库中存储的前缀
//     'table_type': 'mix', // 表格类型，表示是混合表格，既有input，又有radio(mix)
//     'radio_setting': { // radio 的设置
//     'direction': 'column',  // radio 的分布类型，是以列分布还是以行分布
//         'index': [ 1, 2, 4 ], // 哪几行（列）是radio
//         'options': [{value: '1', display_value: '是'}, {value: '2', display_value: '否'}, {value: '3', display_value: '不明'}]
//     // radio的选项都有什么，对应的值是什么
//
// },
//     'length': '',
//     'required': true,
//     'hiddenlist': [],
//     'hiddencondition': [],
//     'hidden': false
// },


// {
//     'webId':  '1',
//     'dbId': 'number',
//     'type': 'input',
//     'front_title': '姓名',
//     'behind_title': '',
//     'validtype': 'number',
//     'validcondition': {
//         'min': 0,
//         'max': 60
//     },
//     'length': '',
//     'required': true,
//     'hiddenlist': [],
//     'hiddencondition': [],
//     'hidden': false
// },
// {
//     'webId':  '2',
//     'dbId': 'len_number',
//     'type': 'input',
//     'front_title': '这是len_number类型',
//     'behind_title': '',
//     'validtype': 'len_number',
//     'validcondition': {
//         'length': 12
//     },
//     'length': '',
//     'required': true,
//     'hiddenlist': [],
//     'hiddencondition': [],
//     'hidden': false
// },
// {
//     'webId':  '3',
//     'dbId': 'text',
//     'type': 'input',
//     'front_title': '这是text类型',
//     'behind_title': '',
//     'validtype': 'text',
//     'validcondition': {
//
//     },
//     'length': '',
//     'required': true,
//     'hiddenlist': [],
//     'hiddencondition': [],
//     'hidden': false
// },
// {
//     'webId':  '4',
//     'dbId': 'len_text',
//     'type': 'input',
//     'front_title': '这是len_text类型',
//     'behind_title': '',
//     'validtype': 'len_text',
//     'validcondition': {
//         'length': 12
//     },
//     'length': '',
//     'required': true,
//     'hiddenlist': [],
//     'hiddencondition': [],
//     'hidden': false
// },
// {
//     'webId': '5',
//     'dbId': 'sex',
//     'type': 'radio',
//     'front_title': '性别',
//     'behind_title': '',
//     'required': true,
//     'content': [
//         '男', '女'
//     ],
//     'hiddenlist': [
//         ['6'],
//         ['3']
//     ],
//     'hidden': false
// },
//  {
//      'webId': '6',
//      'dbId': 'diagnose',
//      'type': 'checkbox',
//      'front_title': '是否有以下疾病',
//      'behind_title': '',
//      'required': true,
//      'content': [
//          '心脏病', '糖尿病', '癌症', '脑炎'
//      ],
//      'hiddenlist': [
//      ],
//      'hidden': false
//  },

export class TestList {
    step_key = ['step_one', 'step_two'];
    questions = {
        'step_one': {
            'name': 'step_one',
            'items': [
                {
                    'webId':  '1',
                    'dbId': 'record_ID',
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
                    'dbId': 'patient_name',
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
                {
                    'webId':  '3',
                    'dbId': 'age',
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
                    'dbId': 'birthday',
                    'type': 'date',
                    'front_title': '出生日期',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '5',
                    'dbId': 'department_in',
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
                    'dbId': 'inday',
                    'type': 'date',
                    'front_title': '入院日期时间',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId': '7',
                    'dbId': 'outday',
                    'type': 'date',
                    'front_title': '出院日期时间',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '8',
                    'dbId': 'department_out',
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
                    'dbId': 'diagnosis_name',
                    'type': 'input',
                    'front_title': '出院诊断-主要名称',
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
                    'dbId': 'diagnosis_code',
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
            ]
        },
        'step_two': {
            'name': 'step_two',
            'items': [
            ]
        }
    };
}

export class ChartsOptions {
    options = [
        {
            'menu_name': '业务统计',
            'charts': [
                {
                    'color': ['#DEB887', '#5599FF', '#008844'],
                    'name': '医生业务量统计',
                    'type': 'bar',
                    'legend': [ '外科组', '内科组', '放疗组' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11'],
                    'series': [
                        [ 103, 116, 142, 106, 69, 67, 53, 1, 1],
                        [
                            126, 118, 133, 184, 225, 330, 361, 359, 185
                        ],
                        [
                            478, 431, 438, 361, 272, 515, 465, 515, 281
                        ]
                    ]

                },
                {
                    'color': ['#DEB887', '#5599FF', '#20B2AA'],
                    'name': '各组药占比',
                    'type': 'bar',
                    'legend': [ '外科组', '内科组', '放疗组' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['201704', '201705', '201706', '201707', '201708', '201709', '201710', '201711', '201712',
                        '201801', '201802', '201803'],
                    'series': [
                        [ 0.4, 0.4, 0.4, 0.38, 0.46, 0.46, 0.44, 0.44, 0.4, 0.46, 0.44, 0.44],
                        [0.65, 0.65, 0.66, 0.68, 0.65, 0.49, 0.63, 0.63, 0.6, 0.57, 0.57, 0.56],
                        [ 0.47, 0.43, 0.39, 0.48, 0.38, 0.45, 0.48, 0.48, 0.52, 0.4, 0.41, 0.46]
                    ],
                    'ymin': 0.2

                },
                {
                    'color': ['#DEB887', '#5599FF', '#20B2AA', '#CD5C5C'],
                    'name': '药占比',
                    'type': 'bar',
                    'legend': [ '外科组', '内科组', '放疗组', '总药占比' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['201704', '201705', '201706', '201707', '201708', '201709', '201710', '201711', '201712',
                        '201801', '201802', '201803'],
                    'series': [
                        [ 0.4, 0.4, 0.4, 0.38, 0.46, 0.46, 0.44, 0.44, 0.4, 0.46, 0.44, 0.44],
                        [0.65, 0.65, 0.66, 0.68, 0.65, 0.49, 0.63, 0.63, 0.6, 0.57, 0.57, 0.56],
                        [ 0.47, 0.43, 0.39, 0.48, 0.38, 0.45, 0.48, 0.48, 0.52, 0.4, 0.41, 0.46],
                        [0.53, 0.53, 0.52, 0.54, 0.5, 0.5, 0.52, 0.52, 0.5, 0.46, 0.46, 0.47]
                    ],
                    'ymin': 0.2

                },
                {
                    'type': 'stackbar',
                    'legend': ['外科组', '内科组', '放疗组'],
                    'xAxis': ['201704', '201705', '201706', '201707', '201708', '201709', '201710', '201711', '201712',
                        '201801', '201802', '201803'],
                    'data': [
                        {
                            name: '外科组',
                            type: 'bar',
                            stack: '总收入',
                            data: [2753108.61, 3191134.37, 1775795.99, 1978236.96, 2367157.27, 2571591.73, 3038126.03,
                                3038126.03, 3476635.47, 5582200.41, 4225113.32, 5275278.38]
                        },
                        {
                            name: '内科组',
                            type: 'bar',
                            stack: '总收入',
                            data: [3539096.12, 3893766.17, 3514092.69, 5078396.82, 4780084.28, 3969195.0, 3971716.67,
                                3971716.67, 6008602.69, 5529583.7, 4242358.36, 6455233.92]
                        },
                        {
                            name: '放疗组',
                            type: 'bar',
                            stack: '总收入',
                            data: [1990691.64, 2242929.77, 2762570.15, 3960902.53, 3834309.34, 4837287.7, 3090553.33,
                                3090553.33, 3202935.8, 3599330.8, 3744237.33, 3576229.11]
                        },
                        // {
                        //     name: '总收入',
                        //     type: 'bar',
                        //     data: [8282896.37, 9327830.31, 8052458.83, 11017536.31, 10981550.89, 11378074.43,
                        //         10100396.03, 10100396.03, 12688173.96, 14711114.91, 12211709.01, 15306741.41],
                        //     markLine : {
                        //         itemStyle: {
                        //             normal: {
                        //                 lineStyle: {
                        //                     type: 'dashed'
                        //                 }
                        //             }
                        //         },
                        //         data : [
                        //             [{type : 'min'}, {type : 'max'}]
                        //         ]
                        //     }
                        // }
                    ]
                },
                {
                    'color': ['#EEE8AA', '#5599FF', '#20B2AA'],
                    'name': '各组收入',
                    'type': 'bar',
                    'legend': [ '外科组', '内科组', '放疗组' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['201704', '201705', '201706', '201707', '201708', '201709', '201710', '201711', '201712',
                        '201801', '201802', '201803'],
                    'series': [
                        [2753108.61, 3191134.37, 1775795.99, 1978236.96, 2367157.27, 2571591.73, 3038126.03, 3038126.03,
                            3476635.47, 5582200.41, 4225113.32, 5275278.38],
                        [3539096.12, 3893766.17, 3514092.69, 5078396.82, 4780084.28, 3969195.0, 3971716.67, 3971716.67,
                            6008602.69, 5529583.7, 4242358.36, 6455233.92],
                        [1990691.64, 2242929.77, 2762570.15, 3960902.53, 3834309.34, 4837287.7, 3090553.33, 3090553.33,
                            2902935.8, 3599330.8, 3144237.33, 3076229.11]
                    ]

                },
                {
                    'color': ['#EEE8AA', '#5599FF', '#20B2AA', '#3398DB'],
                    'name': '各组收入',
                    'type': 'bar',
                    'legend': [ '恶性肿瘤', '良性肿瘤', '放疗组', '总收入' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['201704', '201705', '201706', '201707', '201708', '201709', '201710', '201711', '201712',
                        '201801', '201802', '201803'],
                    'series': [
                        [2753108.61, 3191134.37, 1775795.99, 1978236.96, 2367157.27, 2571591.73, 3038126.03, 3038126.03,
                            3476635.47, 5582200.41, 4225113.32, 5275278.38],
                        [3539096.12, 3893766.17, 3514092.69, 5078396.82, 4780084.28, 3969195.0, 3971716.67, 3971716.67,
                            6008602.69, 5529583.7, 4242358.36, 6455233.92],
                        [1990691.64, 2242929.77, 2762570.15, 3960902.53, 3834309.34, 4837287.7, 3090553.33, 3090553.33,
                            2902935.8, 3599330.8, 3144237.33, 3076229.11],
                        [ 11461105.18, 13024561.98, 11718588.59, 12933432.94, 13711667.79, 15049138.97, 11991360.45,
                            11991360.45, 15159915.37, 15554390.08, 11715271.15, 17886704.75]
                    ]

                },
                {   'color': ['#3398DB'],
                    'name': '肿瘤科2017.4~2018.3各月收入',
                    'type': 'bar',
                    'legend': [ '总收入' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['201704', '201705', '201706', '201707', '201708', '201709', '201710', '201711', '201712',
                        '201801', '201802', '201803'],
                    'series': [
                        [ 11461105.18, 13024561.98, 11718588.59, 12933432.94, 13711667.79, 15049138.97, 11991360.45,
                            11991360.45, 15159915.37, 15554390.08, 11715271.15, 17886704.75]
                    ]
                },
                {   'color': ['#CD5C5C'],
                    'name': '肿瘤科2017.4~2018.3各月药占比',
                    'type': 'bar',
                    'legend': [ '药占比' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['201704', '201705', '201706', '201707', '201708', '201709', '201710', '201711', '201712',
                        '201801', '201802', '201803'],
                    'series': [
                        [ 0.53, 0.53, 0.52, 0.54, 0.5, 0.5, 0.52, 0.52, 0.5, 0.46, 0.46, 0.47]
                    ],
                    'ymin': 0.4
                },
                {
                    'name': '医疗付费方式',
                    'type': 'pie',
                    'legend': [
                        '新型农村合作医疗', '城镇职工基本医疗保险', '城镇居民基本医疗保险', '全自费', '全公费',
                        '其他社会保险', '商业医疗保险', '其他', '不详'],
                    'series': [
                        {
                            name: '医疗付费方式',
                            type: 'pie',
                            radius : [30, 110],
                            center : ['50%', 200],
                            roseType : 'area',
                            x: '50%',
                            max: 2107,
                            sort : 'ascending',
                            data: [
                                {value: 1574, name: '新型农村合作医疗'},
                                {value: 2107, name: '城镇职工基本医疗保险'},
                                {value: 483, name: '城镇居民基本医疗保险'},
                                {value: 247, name: '全自费'},
                                {value: 4, name: '全公费'},
                                {value: 48, name: '其他社会保险'},
                                {value: 3, name: '商业医疗保险'},
                                {value: 2025, name: '其他'},
                                {value: 1285, name: '不详'}
                            ]
                        }]
                },
                {
                    'name': '平均住院日统计',
                    'type': 'bar',
                    'legend': [ '外科组', '内科组', '放疗组' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['2017.3', '2017.4', '2017.5', '2017.6', '2017.7', '2017.8', '2017.9', '2017.10', '2017.11'],
                    'series': [
                        [ 8.16, 7.92, 7.15, 6.19, 7.71, 6.69, 5.43, 7.0, 6.0 ],
                        [ 7.49, 7.57, 7.2, 6.26, 7.13, 6.8, 6.11, 6.21, 5.99 ],
                        [ 7.35, 7.67, 7.32, 6.38, 8.54, 8.04, 7.43, 7.22, 5.94]
                    ]
                },
                {
                    'name': '平均住院花费统计',
                    'type': 'bar',
                    'legend': [ '外科组', '内科组', '放疗组' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['2017.3', '2017.4', '2017.5', '2017.6', '2017.7', '2017.8', '2017.9', '2017.10', '2017.11'],
                    'series': [
                        [ 8924.9, 10318.29, 16268.96, 15223.56, 15010.4, 12731.17, 13808.09, 17500.51, 15820.54 ],
                        [ 13488.08, 12709.46, 13657.17, 13276.95, 13177.03, 12667.98, 12070.14, 12677.71, 12251.56],
                        [ 10877.34, 13383.08, 15176.43, 14303.81, 17921.23, 16581.08, 16723.33, 16132.35, 14520.86]
                    ]
                },
                {
                    'name': '平均住院花费与住院日比统计',
                    'type': 'bar',
                    'legend': [ '外科组', '内科组', '放疗组' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['2017.3', '2017.4', '2017.5', '2017.6', '2017.7', '2017.8', '2017.9', '2017.10', '2017.11'],
                    'series': [
                        [ 1093.74, 1302.81, 2275.38, 2459.38, 1946.87, 1903.01, 2542.93, 2500.53, 2636.66 ],
                        [ 1800.81, 1678.92, 1896.83, 2120.92, 1848.11, 1862.94, 1975.47, 2041.5, 2045.34],
                        [ 1479.91, 1744.86, 2073.28, 2241.98, 2098.47, 2062.32, 2250.78, 2234.4, 2444.59]
                    ]
                }

            ]
        },
        {
            'menu_name': '患者统计',
            'charts': [

                {   'name': '患者年龄统计',
                    'filter_name': 'diagnosis',
                    'type': 'bar',
                    'legend': ['入院患者', '乳腺恶性肿瘤'],
                    'xAxis': ['<20', '20-30', '30-40', '40-50', '50-60', '60-70', '>70'],
                    'series': [
                        [40, 351, 818, 2087, 2319, 1577, 584],
                        [0, 79, 453, 1169, 1236, 540, 258]
                    ]

                },
                {   'name': '城市分布统计',
                    'type': 'bar',
                    'legend': ['乳腺恶性肿瘤', '乳腺良性肿瘤'],
                    'xAxis': ['西安市', '咸阳市', '渭南市', '延安市', '铜川市', '宝鸡市', '榆林市', '庆阳市', '商洛市',
                        '韩城市', '兰州市', '安康市', '华阴市', '汉中市', '兴平市'],
                    'series': [
                        [674, 106, 63, 40, 39, 24, 15, 8, 6, 5, 4, 3, 3, 1, 1]
                    ]
                },
                {
                    'name': '乳腺癌城市分布统计',
                    'type': 'map',
                    'legend': ['乳腺恶性肿瘤', '乳腺良性肿瘤'],
                    'mapType': ['陕西'],
                    'series': [[
                        {name: '西安市', value: 674 },
                        {name: '咸阳市', value: 306 },
                        {name: '渭南市', value: 63 },
                        {name: '延安市', value: 40 },
                        {name: '铜川市', value: 39 },
                        {name: '宝鸡市', value: 24 },
                        {name: '榆林市', value: 15 },
                        {name: '商洛市', value: 6 },
                        {name: '安康市', value: 3 },
                        {name: '华阴市', value: 3 },
                        {name: '汉中市', value: 1 },
                        {name: '兴平市', value: 1 }
                    ],
                        [
                            {name: '西安市', value: 674 },
                            {name: '咸阳市', value: 306 },
                            {name: '渭南市', value: 63 },
                            {name: '延安市', value: 40 },
                            {name: '铜川市', value: 39 },
                            {name: '宝鸡市', value: 24 },
                            {name: '榆林市', value: 15 },
                            {name: '商洛市', value: 6 },
                            {name: '安康市', value: 3 },
                            {name: '华阴市', value: 3 },
                            {name: '汉中市', value: 1 },
                            {name: '兴平市', value: 1 }
                        ]]
                },
                {
                    'name': '4898例乳腺患者(按主要诊断代码分)分类统计',
                    'type': 'pie',
                    'legend': [
                        'N63.x00', 'N60.202', 'C50.901',
                        'C50.900', 'D48.601', 'N64.901', 'N64.900', 'N64.900', 'D24.x00', 'N64.504'],
                    'series': [
                        {
                            name: '4898例乳腺癌(按主要诊断代码分)分类统计',
                            type: 'pie',
                            radius : [30, 110],
                            center : ['50%', 200],
                            roseType : 'area',
                            x: '50%',
                            max: 2107,
                            sort : 'ascending',
                            data: [
                                {value: 110, name: 'N63.x00(乳房肿块)'},
                                {value: 23, name: 'N60.202(乳腺纤维囊性增生)'},
                                {value: 8, name: 'C50.901(男性乳腺性肿瘤)'},
                                {value: 3735, name: 'C50.900(乳腺/乳房恶性肿瘤)'},
                                {value: 2543, name: 'D48.601(乳腺肿瘤)'},
                                {value: 1, name: 'N64.901(乳房肿物)'},
                                {value: 3, name: 'N64.900(乳房疾患)'},
                                {value: 300, name: 'D24.x00(乳房良性肿瘤)'},
                                {value: 18, name: 'N64.504(乳头溢液)'}
                            ]
                        }]
                },
                {
                    'name': '乳腺恶性肿瘤年龄分布统计',
                    'type': 'pie',
                    'legend': [
                        '20岁以下', '20~30岁', '30~40岁', '40~50岁', '50~60岁',
                        '60岁以上'],
                    'series': [
                        {
                            name: '乳腺',
                            type: 'pie',
                            radius : [30, 110],
                            center : ['50%', 200],
                            roseType : 'area',
                            x: '50%',
                            max: 2107,
                            sort : 'ascending',
                            data: [
                                {value: 0, name: '20岁以下'},
                                {value: 79, name: '20~30岁'},
                                {value: 453, name: '30~40岁'},
                                {value: 1169, name: '40~50岁'},
                                {value: 1236, name: '50~60岁'},
                                {value: 798, name: '60岁以上'},
                            ]
                        }]
                },

                {
                    'type': 'stackbar',
                    'legend': ['入院患者总数', '乳腺恶性肿瘤', '其它'],
                    'xAxis': ['<20', '20-30', '30-40', '40-50', '50-60', '60-70', '>70'],
                    'data': [
                        {
                            name: '乳腺恶性肿瘤',
                            type: 'bar',
                            stack: '入院患者总数',
                            data: [0, 79, 453, 1169, 1236, 540, 258]
                        },
                        {
                            name: '其它',
                            type: 'bar',
                            stack: '入院患者总数',
                            data: [40, 272, 365, 918, 1083, 1037, 326]
                        },
                        {
                            name: '入院患者总数',
                            type: 'bar',
                            data: [40, 351, 818, 2087, 2319, 1577, 584],
                            // markLine : {
                            //     itemStyle: {
                            //         normal: {
                            //             lineStyle: {
                            //                 type: 'dashed'
                            //             }
                            //         }
                            //     },
                            //     data : [
                            //         [{type : 'min'}, {type : 'max'}]
                            //     ]
                            // }
                        }

                    ]
                },
            ]
        },
        {
            'menu_name': '医生统计',
            'charts': [
                {   type: 'normalpie',
                    name: 'TNM分期',
                    legend: ['IA', 'IIA', 'IIB', 'IIIA', 'IIIB', 'IIIC'],
                    series: [
                        {
                            name: 'TNM分期',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 0, name: 'IA'},
                                { value: 0, name: 'IIA'},
                                { value: 1, name: 'IIB'},
                                { value: 0, name: 'IIIA'},
                                { value: 0, name: 'IIIB'},
                                { value: 1, name: 'IIIC'}
                            ]
                        },
                        {
                            name: 'TNM分期',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 8, name: 'IA'},
                                { value: 11, name: 'IIA'},
                                { value: 2, name: 'IIB'},
                                { value: 2, name: 'IIIA'},
                                { value: 0, name: 'IIIB'},
                                { value: 1, name: 'IIIC'}
                            ]
                        },
                        {
                            name: 'TNM分期',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 24, name: 'IA'},
                                { value: 38, name: 'IIA'},
                                { value: 10, name: 'IIB'},
                                { value: 10, name: 'IIIA'},
                                { value: 0, name: 'IIIB'},
                                { value: 6, name: 'IIIC'},
                            ]
                        },
                        {
                            name: 'TNM分期',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 24, name: 'IA'},
                                { value: 36, name: 'IIA'},
                                { value: 10, name: 'IIB'},
                                { value: 9, name: 'IIIA'},
                                { value: 1, name: 'IIIB'},
                                { value: 9, name: 'IIIC'},
                            ]
                        },
                        {
                            name: 'TNM分期',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 6, name: 'IA'},
                                { value: 21, name: 'IIA'},
                                { value: 6, name: 'IIB'},
                                { value: 6, name: 'IIIA'},
                                { value: 1, name: 'IIIB'},
                                { value: 2, name: 'IIIC'},
                            ]
                        },
                        {
                            name: 'TNM分期',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 2, name: 'IA'},
                                { value: 4, name: 'IIA'},
                                { value: 0, name: 'IIB'},
                                { value: 2, name: 'IIIA'},
                                { value: 0, name: 'IIIB'},
                                { value: 3, name: 'IIIC'},
                            ]
                        }
                    ]
                },
                {   type: 'normalpie',
                    name: '分子分型',
                    legend: ['基底型', 'LuminalA型', 'Luminal B1型', 'Luminal B2型', 'HER2过表达型'],
                    series: [
                        {
                            name: '分子分型',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 0, name: '基底型'},
                                { value: 1, name: 'LuminalA型'},
                                { value: 0, name: 'Luminal B1型'},
                                { value: 1, name: 'Luminal B2型'},
                                { value: 0, name: 'HER2过表达型'}
                            ]
                        },
                        {
                            name: '分子分型',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 9, name: '基底型'},
                                { value: 11, name: 'LuminalA型'},
                                { value: 0, name: 'Luminal B1型'},
                                { value: 3, name: 'Luminal B2型'},
                                { value: 1, name: 'HER2过表达型'}
                            ]
                        },
                        {
                            name: '分子分型',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 14, name: '基底型'},
                                { value: 46, name: 'LuminalA型'},
                                { value: 0, name: 'Luminal B1型'},
                                { value: 15, name: 'Luminal B2型'},
                                { value: 13, name: 'HER2过表达型'}
                            ]
                        },
                        {
                            name: '分子分型',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 18, name: '基底型'},
                                { value: 43, name: 'LuminalA型'},
                                { value: 0, name: 'Luminal B1型'},
                                { value: 11, name: 'Luminal B2型'},
                                { value: 16, name: 'HER2过表达型'}
                            ]
                        },
                        {
                            name: '分子分型',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 7, name: '基底型'},
                                { value: 29, name: 'LuminalA型'},
                                { value: 0, name: 'Luminal B1型'},
                                { value: 5, name: 'Luminal B2型'},
                                { value: 12, name: 'HER2过表达型'}
                            ]
                        },
                        {
                            name: '分子分型',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 1, name: '基底型'},
                                { value: 7, name: 'LuminalA型'},
                                { value: 0, name: 'Luminal B1型'},
                                { value: 0, name: 'Luminal B2型'},
                                { value: 3, name: 'HER2过表达型'}
                            ]
                        }
                    ]
                },
                {   type: 'normalpie',
                    name: 'HER-2状态',
                    legend: ['阳性', '阴性'],
                    series: [
                        {
                            name: 'HER-2状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 1, name: '阳性'},
                                { value: 1, name: '阴性'},
                            ]
                        },
                        {
                            name: 'HER-2状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 4, name: '阳性'},
                                { value: 20, name: '阴性'},
                            ]
                        },
                        {
                            name: 'HER-2状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 28, name: '阳性'},
                                { value: 60, name: '阴性'},
                            ]
                        },
                        {
                            name: 'HER-2状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 28, name: '阳性'},
                                { value: 61, name: '阴性'},
                            ]
                        },
                        {
                            name: 'HER-2状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 17, name: '阳性'},
                                { value: 36, name: '阴性'},
                            ]
                        },
                        {
                            name: 'HER-2状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 3, name: '阳性'},
                                { value: 8, name: '阴性'},
                            ]
                        }
                    ]
                },
                {   type: 'normalpie',
                    name: '绝经状态',
                    legend: ['绝经前', '绝经后'],
                    series: [
                        {
                            name: 'HER-2状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 1, name: '绝经前'},
                                { value: 0, name: '绝经后'},
                            ]
                        },
                        {
                            name: '绝经状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 24, name: '绝经前'},
                                { value: 0, name: '绝经后'},
                            ]
                        },
                        {
                            name: '绝经状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 85, name: '绝经前'},
                                { value: 3, name: '绝经后'},
                            ]
                        },
                        {
                            name: '绝经状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 25, name: '绝经前'},
                                { value: 64, name: '绝经后'},
                            ]
                        },
                        {
                            name: '绝经状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 0, name: '绝经前'},
                                { value: 53, name: '绝经后'},
                            ]
                        },
                        {
                            name: '绝经状态',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 0, name: '绝经前'},
                                { value: 11, name: '绝经后'},
                            ]
                        }
                    ]
                },
                {   type: 'normalpie',
                    name: '病理类型',
                    legend: ['混合癌', '小叶癌', '髓样癌', '导管癌'],
                    series: [
                        {
                            name: '病理类型',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 0, name: '混合癌'},
                                { value: 0, name: '小叶癌'},
                                { value: 0, name: '髓样癌'},
                                { value: 2, name: '导管癌'}
                            ]
                        },
                        {
                            name: '病理类型',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 1, name: '混合癌'},
                                { value: 0, name: '小叶癌'},
                                { value: 2, name: '髓样癌'},
                                { value: 21, name: '导管癌'}
                            ]
                        },
                        {
                            name: '病理类型',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '10%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 1, name: '混合癌'},
                                { value: 3, name: '小叶癌'},
                                { value: 1, name: '髓样癌'},
                                { value: 83, name: '导管癌'}
                            ]
                        },
                        {
                            name: '病理类型',
                            type: 'pie',
                            radius: '10%',
                            center: ['15%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 2, name: '混合癌'},
                                { value: 2, name: '小叶癌'},
                                { value: 3, name: '髓样癌'},
                                { value: 82, name: '导管癌'}
                            ]
                        },
                        {
                            name: '病理类型',
                            type: 'pie',
                            radius: '10%',
                            center: ['38%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 1, name: '混合癌'},
                                { value: 1, name: '小叶癌'},
                                { value: 3, name: '髓样癌'},
                                { value: 48, name: '导管癌'}
                            ]
                        },
                        {
                            name: '病理类型',
                            type: 'pie',
                            radius: '10%',
                            center: ['61%', '30%'],
                            label: { normal: {
                                show: true,
                                formatter: '{b}:{d}%'
                            }},
                            data: [
                                { value: 1, name: '混合癌'},
                                { value: 0, name: '小叶癌'},
                                { value: 0, name: '髓样癌'},
                                { value: 10, name: '导管癌'}
                            ]
                        }
                    ]
                },
            ]
        }
    ];

}

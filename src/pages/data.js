let list0 = [{
	id: 0,
	xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
		'2023-11-07'
	],
	yDataList: [
		[7, 12, 8, 9, 10, 8, 11]
	],
	title: '水损率',
	nameList: ['水损率'],
	type: 'line',
	unit: '%',
	markLineList: [{
		yAxis: '10',
		name: '控制值',
		lineStyle: {
			color: '#00b050'
		},
		label: {
			show: false
		}
	}],
	valueList: [{
		tagName: '当前值',
		tagValue: 11,
		color: '#e7515a'
	}, {
		tagName: '控制值',
		tagValue: 10,
		color: '#00b050'
	}],
	showLabel: true
}]
let list1 = [{
		id: 16,
		xDataList: ['细格栅', '粗格栅', '二沉池'],
		yDataList: [
			[2000, 2500, 3000]
		],
		title: '短板单元',
		nameList: ['短板单元'],
		type: 'bar',
		unit: 'm³/h',
		showLabel: true,
		alarmInfo: null,
		color: ['#e2a03f', '#8543e0', '#5d7092']
	},
	{
		id: 1,
		xDataList: [
			'0:00',
			'1:00',
			'2:00',
			'3:00',
			'4:00',
			'5:00',
			'6:00',
			'7:00',
			'8:00',
			'9:00',
			'10:00',
			'11:00',
			'12:00',
			'13:00',
			'14:00',
			'15:00',
			'16:00',
			'17:00',
			'18:00',
			'19:00',
			'20:00',
			'21:00',
			'22:00',
			'23:00'
		],
		yDataList: [
			[1800, 2600, 2000, 2200, 2600, 1400, 1800, 3000, 4200, 4500, 2500, 1500, 3500, 4800, 4500, 2000,
				2300, 1800, 2500, 2000, 4000, 3000, 4000, 5000
			]
		],
		title: '实际水量',
		nameList: ['实际水量'],
		type: 'line',
		unit: 'm³/h',
		markLineList: [{
				yAxis: '2000',
				name: '细格栅',
				lineStyle: {
					color: '#e2a03f'
				},
				label: {
					show: false
				}
			},
			{
				yAxis: '2500',
				name: '粗格栅',
				lineStyle: {
					color: '#8543e0'
				},
				label: {
					show: false
				}
			},
			{
				yAxis: '3000',
				name: '二沉池',
				lineStyle: {
					color: '#5d7092'
				},
				label: {
					show: false
				}
			}
		],
		valueList: [{
				tagName: '当前值',
				tagValue: 5000,
				color: '#e7515a'
			},
			{
				tagName: '细格栅',
				tagValue: 2000,
				color: '#e2a03f'
			},
			{
				tagName: '粗格栅',
				tagValue: 2500,
				color: '#8543e0'
			},
			{
				tagName: '二沉池',
				tagValue: 3000,
				color: '#5d7092'
			}
		],
		showLabel: false
	}
]
let list2 = [{
		id: 2,
		xDataList: ['1：00', '2：00', '3：00', '4：00', '5：00', '6：00', '7：00', '8：00', '9：00', '10：00', '11：00',
			'12：00'
		],
		yDataList: [
			[5000, 12000, 15000, 16000, 18000, 22000, 25000, 28000, 33000, 40000, 45000, 49000],
			[48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000]
		],
		title: '进水量预测',
		nameList: ['实际进水量', '预测进水量'],
		type: 'line',
		unit: 'm³',
		markLineList: [],
		valueList: [{
			tagName: '当前值',
			tagValue: 49000,
			color: '#4155c6'
		}, {
			tagName: '预测值',
			tagValue: 48000,
			color: '#00b050'
		}],
		alarmInfo: null,
		showLabel: false
	},
	{
		id: 3,
		xDataList: ['1：00', '2：00', '3：00', '4：00', '5：00', '6：00', '7：00', '8：00', '9：00', '10：00', '11：00',
			'12：00'
		],
		yDataList: [
			[5000, 12000, 15000, 16000, 18000, 22000, 25000, 28000, 33000, 40000, 45000, 49000],
			[48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000]
		],
		title: '出水量预测',
		nameList: ['实际出水量', '预测出水量'],
		type: 'line',
		unit: 'm³',
		markLineList: [],
		valueList: [{
			tagName: '当前值',
			tagValue: 49000,
			color: '#4155c6'
		}, {
			tagName: '预测值',
			tagValue: 48000,
			color: '#00b050'
		}],
		alarmInfo: null,
		showLabel: false
	}
]
let list3 = [{
		id: 4,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[20, 25, 28, 18, 19, 26, 32]
		],
		title: '进水COD波动',
		nameList: ['进水COD波动'],
		type: 'line',
		unit: '%',
		markLineList: [{
			yAxis: '30',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 32,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 30,
			color: '#00b050'
		}],
		showLabel: true,
		radio: '日',
		zoom: true
	},
	{
		id: 5,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[20, 25, 28, 18, 19, 26, 32]
		],
		title: '进水NH3波动',
		nameList: ['进水NH3波动'],
		type: 'line',
		unit: '%',
		markLineList: [{
			yAxis: '30',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 32,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 30,
			color: '#00b050'
		}],
		showLabel: true,
		radio: '日',
		zoom: true
	},
	{
		id: 8,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[20, 25, 28, 18, 19, 26, 32]
		],
		title: '进水TN波动',
		nameList: ['进水TN波动'],
		type: 'line',
		unit: '%',
		markLineList: [{
			yAxis: '30',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 32,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 30,
			color: '#00b050'
		}],
		showLabel: true,
		radio: '日',
		zoom: true
	},
	{
		id: 9,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[20, 25, 28, 18, 19, 26, 32]
		],
		title: '进水TP波动',
		nameList: ['进水TP波动'],
		type: 'line',
		unit: '%',
		markLineList: [{
			yAxis: '30',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 32,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 30,
			color: '#00b050'
		}],
		showLabel: true,
		radio: '日',
		zoom: true
	},
	{
		id: 12,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[20, 25, 28, 18, 19, 26, 32]
		],
		title: '进水SS波动',
		nameList: ['进水SS波动'],
		type: 'line',
		unit: '%',
		markLineList: [{
			yAxis: '30',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 32,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 30,
			color: '#00b050'
		}],
		showLabel: true,
		radio: '日',
		zoom: true
	},
	{
		id: 13,
		xDataList: [
			'2023-07-02',
			'2023-07-09',
			'2023-07-16',
			'2023-07-23',
			'2023-07-30',
			'2023-08-06',
			'2023-08-13',
			'2023-08-20',
			'2023-08-27',
			'2023-09-03',
			'2023-09-10',
			'2023-09-17',
			'2023-09-24'
		],
		yDataList: [
			[20, 25, 28, 18, 19, 26, 32, 25, 10, 34, 16, 24, 20]
		],
		// xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
		// yDataList: [[20, 25, 28, 18, 19, 26, 32]],
		title: '进水ph波动',
		nameList: ['进水ph波动'],
		type: 'line',
		unit: '%',
		markLineList: [{
			yAxis: '30',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 20,
			color: '#4155c6'
		}, {
			tagName: '控制值',
			tagValue: 30,
			color: '#00b050'
		}],
		showLabel: true,
		radio: '周',
		zoom: true
	}
]
let list4 = [{
		id: 7,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[1000, 2500, 2800, 1800, 900, 2600, 3200]
		],
		title: '外回流控制预警',
		nameList: ['外回流'],
		type: 'line',
		unit: 'm³/h',
		markLineList: [{
			yAxis: '2500',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 3200,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 2500,
			color: '#00b050'
		}],
		showLabel: true
	},
	{
		id: 10,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[6000, 10000, 8000, 9000, 7000, 6000, 6500]
		],
		title: 'MLSS控制预警',
		nameList: ['MLSS'],
		type: 'line',
		unit: 'mg/L',
		markLineList: [{
			yAxis: '8000',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 6500,
			color: '#4155c6'
		}, {
			tagName: '控制值',
			tagValue: 8000,
			color: '#00b050'
		}],
		showLabel: true
	},
	{
		id: 11,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[60, 100, 80, 90, 70, 60, 65]
		],
		title: '碳源控制预警',
		nameList: ['碳源'],
		type: 'line',
		unit: 'm³/h',
		markLineList: [{
			yAxis: '80',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 65,
			color: '#4155c6'
		}, {
			tagName: '控制值',
			tagValue: 80,
			color: '#00b050'
		}],
		showLabel: true
	}
]
let list5 = [{
		id: 14,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[2000, 2500, 2800, 1800, 1900, 2600, 3200]
		],
		title: '内回流控制预警',
		nameList: ['内回流'],
		type: 'line',
		unit: 'm³/h',
		markLineList: [{
			yAxis: '2500',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 3200,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 2500,
			color: '#00b050'
		}],
		showLabel: true
	},

	{
		id: 6,
		xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06',
			'2023-11-07'
		],
		yDataList: [
			[2, 2.5, 3, 2.5, 1, 3.6, 2.8]
		],
		title: 'DO控制预警',
		nameList: ['DO'],
		type: 'line',
		unit: 'mg/L',
		markLineList: [{
			yAxis: '2.5',
			name: '控制值',
			lineStyle: {
				color: '#00b050'
			},
			label: {
				show: false
			}
		}],
		valueList: [{
			tagName: '当前值',
			tagValue: 2.8,
			color: '#e7515a'
		}, {
			tagName: '控制值',
			tagValue: 2.5,
			color: '#00b050'
		}],
		showLabel: true
	}
]
export {
	list0,
	list1,
	list2,
	list3,
	list4,
	list5
}
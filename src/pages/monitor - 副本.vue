<template>
	<div style="height: 100%;">
		<div class="content">
			<div class="top-header"></div>
			<div class="main-wrapper">
				<div class="top-wrapper">
					<div class="row1"><echartsItem v-for="item in list1" :key="item.id" :item="item" :height="182"></echartsItem></div>
					<div class="group">
						<div class="title">水量负荷预警</div>
						<div class="row2"><echartsItem v-for="item in list2" :key="item.id" :item="item" :height="130"></echartsItem></div>
					</div>
				</div>

				<div class="bottom-wrapper">
					<div class="group">
						<div class="title">水质波动预警</div>
						<div class="row2"><echartsItem v-for="item in list3" :key="item.id" :item="item" :height="134"></echartsItem></div>
					</div>
					<div class="row1"><echartsItem v-for="item in list4" :key="item.id" :item="item" :height="152"></echartsItem></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import echartsItem from '../components/echartsItem.vue';
export default {
	components: { echartsItem },
	data() {
		return {
			list1: [
				{
					id: 0,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[7, 12, 8, 9, 10, 8, 11]],
					title: '水损率',
					nameList: ['水损率'],
					type: 'line',
					unit: '%',
					markLine: true,
					isshow: true,
					valueList: [{ tagName: '当前值', tagValue: 8.5 }]
				},
				{
					id: 1,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[50000, 60000, 40000, 60000, 70000, 40000, 50000]],
					title: '实际水量',
					nameList: ['实际水量'],
					type: 'line',
					unit: 'm³',
					markLine: true,
					isshow: true,
					right: '20%',
					valueList: [{ tagName: '粗格栅', tagValue: 12100 }, { tagName: '初沉池', tagValue: 12100 }, { tagName: '二沉池', tagValue: 12100 }]
				}
			],
			list2: [
				{
					id: 2,
					xDataList: ['1：00', '2：00', '3：00', '4：00', '5：00', '6：00', '7：00', '8：00', '9：00', '10：00', '11：00', '12：00'],
					yDataList: [
						[5000, 12000, 15000, 16000, 18000, 22000, 25000, 28000, 33000, 40000, 45000, 50000],
						[3000, 8000, 12000, 18000, 19000, 22000, 25000, 26000, 32000, 42000, 44000, 49000]
					],
					title: '进水量预测',
					nameList: ['实际进水量', '预测进水量'],
					type: 'line',
					unit: 'm³',
					markLine: false
				},
				{
					id: 3,
					xDataList: ['1：00', '2：00', '3：00', '4：00', '5：00', '6：00', '7：00', '8：00', '9：00', '10：00', '11：00', '12：00'],
					yDataList: [
						[5000, 12000, 15000, 16000, 18000, 22000, 25000, 28000, 33000, 40000, 45000, 50000],
						[3000, 8000, 12000, 18000, 19000, 22000, 25000, 26000, 32000, 42000, 44000, 49000]
					],
					title: '出水量预测',
					nameList: ['实际出水量', '预测出水量'],
					type: 'line',
					unit: 'm³',
					markLine: false
				}
			],
			list3: [],
			list3: [
				{
					id: 4,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水COD波动',
					nameList: ['进水COD波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 5,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水NH3波动',
					nameList: ['进水NH3波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 8,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水TN波动',
					nameList: ['进水TN波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 9,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水TP波动',
					nameList: ['进水TP波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 12,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水SS波动',
					nameList: ['进水SS波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 13,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水ph波动',
					nameList: ['进水ph波动'],
					type: 'line',
					unit: '%',
					markLine: true
				}
			],
			list4: [
				{
					id: 14,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '内回流',
					nameList: ['内回流'],
					type: 'line',
					unit: 'm³/h',
					markLine: true
				},
				{
					id: 7,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '外回流',
					nameList: ['外回流'],
					type: 'line',
					unit: 'm³/h',
					markLine: true
				},
				{
					id: 6,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: 'DO',
					nameList: ['DO'],
					type: 'line',
					unit: 'mg/L',
					markLine: true
				},
				{
					id: 10,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[6000, 10000, 8000, 9000, 7000, 6000, 6500]],
					title: 'MLSS',
					nameList: ['MLSS'],
					type: 'line',
					unit: 'mg/L',
					markLine: true
				},
				{
					id: 11,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[60, 100, 80, 90, 70, 60, 65]],
					title: '碳源',
					nameList: ['碳源'],
					type: 'line',
					unit: 'm³/h',
					markLine: true
				}

				// {
				// 	id: 15,
				// 	xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
				// 	yDataList: [[20, 25, 28, 18, 19, 26, 32]],
				// 	title: '除磷',
				// 	nameList: ['除磷'],
				// 	type: 'line',
				// 	unit: 'm³/h',
				// 	markLine: true
				// }
			],
			list: [
				{
					id: 0,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[7, 12, 8, 9, 10, 8, 11]],
					title: '水损率',
					nameList: ['水损率'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 1,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[50000, 60000, 40000, 60000, 70000, 40000, 50000]],
					title: '实际水量',
					nameList: ['实际水量'],
					type: 'line',
					unit: 'm³',
					markLine: true
				},
				{
					id: 2,
					xDataList: ['1：00', '2：00', '3：00', '4：00', '5：00', '6：00', '7：00', '8：00', '9：00', '10：00', '11：00', '12：00'],
					yDataList: [
						[5000, 12000, 15000, 16000, 18000, 22000, 25000, 28000, 33000, 40000, 45000, 50000],
						[3000, 8000, 12000, 18000, 19000, 22000, 25000, 26000, 32000, 42000, 44000, 49000]
					],
					title: '进水量预测',
					nameList: ['实际进水量', '预测进水量'],
					type: 'line',
					unit: 'm³',
					markLine: false
				},
				{
					id: 3,
					xDataList: ['1：00', '2：00', '3：00', '4：00', '5：00', '6：00', '7：00', '8：00', '9：00', '10：00', '11：00', '12：00'],
					yDataList: [
						[5000, 12000, 15000, 16000, 18000, 22000, 25000, 28000, 33000, 40000, 45000, 50000],
						[3000, 8000, 12000, 18000, 19000, 22000, 25000, 26000, 32000, 42000, 44000, 49000]
					],
					title: '出水量预测',
					nameList: ['实际出水量', '预测出水量'],
					type: 'line',
					unit: 'm³',
					markLine: false
				},
				{
					id: 4,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水COD波动',
					nameList: ['进水COD波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 5,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水NH3波动',
					nameList: ['进水NH3波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 6,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: 'DO',
					nameList: ['DO'],
					type: 'line',
					unit: 'mg/L',
					markLine: true
				},
				{
					id: 7,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '外回流',
					nameList: ['外回流'],
					type: 'line',
					unit: 'm³/h',
					markLine: true
				},
				{
					id: 8,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水TN波动',
					nameList: ['进水TN波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 9,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水TP波动',
					nameList: ['进水TP波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 10,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[6000, 10000, 8000, 9000, 7000, 6000, 6500]],
					title: 'MLSS',
					nameList: ['MLSS'],
					type: 'line',
					unit: 'mg/L',
					markLine: true
				},
				{
					id: 11,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[60, 100, 80, 90, 70, 60, 65]],
					title: '碳源',
					nameList: ['碳源'],
					type: 'line',
					unit: 'm³/h',
					markLine: true
				},
				{
					id: 12,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水SS波动',
					nameList: ['进水SS波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 13,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '进水ph波动',
					nameList: ['进水ph波动'],
					type: 'line',
					unit: '%',
					markLine: true
				},
				{
					id: 14,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '内回流',
					nameList: ['内回流'],
					type: 'line',
					unit: 'm³/h',
					markLine: true
				},
				{
					id: 15,
					xDataList: ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07'],
					yDataList: [[20, 25, 28, 18, 19, 26, 32]],
					title: '除磷',
					nameList: ['除磷'],
					type: 'line',
					unit: 'm³/h',
					markLine: true
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.content {
	padding: 10px;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.top-header {
	height: 150px;
	width: 100%;
	background: url(../assets/logo.png);
	background-size: 100% 100%;
}
.main-wrapper {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding-top: 10px;
	width: 100%;
}
.title {
	padding-bottom: 10px;
	font-weight: bold;
}
.top-wrapper {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}
.bottom-wrapper {
	display: flex;
	justify-content: space-between;
	flex: 1;
}
.row1 {
	width: 49.6%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: space-between;
}
.group {
	width: 49.6%;
	border: 1px solid #d1d3d8;
	background-color: #fff;
	color: #303133;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
	padding: 10px;
	border-radius: 10px;
	height: 100%;
}
.row2 {
	width: 100%;
	height: calc(100% - 30px);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: space-between;
}
</style>

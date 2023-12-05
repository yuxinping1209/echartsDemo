<template>
	<div class="echart-wrapper" :style="{ height: height, width: width }">
		<slot></slot>
		<div style="display: flex;height: calc(100% - 20px);">
			<div v-if="item.valueList && item.valueList.length > 0" class="tag-wrapper">
				<div class="tag" v-for="(el, index) in item.valueList" :key="index">
					<span class="tagname" :style="{ color: el.color || '#333' }">{{ el.tagName && el.tagName + '：' }}</span>
					<span class="tagvalue" :style="{ color: el.color || '#333' }">{{ el.tagValue }}</span>
				</div>
			</div>

			<div :ref="echarts" style="height: 100%;flex:1;"></div>
		</div>

		<div class="alarm" v-if="item.alarmInfo !== null">
			<img src="../assets/alarm.png" alt="" />
			{{ item.title }}超负荷报警信息
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object
		},
		height: {
			type: String,
			default: '100%'
		},
		width: {
			type: String,
			default: '100%'
		}
	},
	watch: {
		'item.yDataList': {
			handler() {
				if (this.optionChart) {
					this.optionChart.dispose();
					window.removeEventListener('resize', this.echartsResize);
				}
				this.seriesList = [];
				this.editData();
			},
			immediate: true,
			deep: true
		}
	},
	data() {
		return {
			echarts: 'echarts' + this.item.id,
			seriesList: [],
			timer: null,
			optionChart: null
		};
	},
	destroyed() {
		window.removeEventListener('resize', this.echartsResize);
	},
	methods: {
		editData() {
			this.item.yDataList.forEach((item, index) => {
				let obj = {
					name: this.item.nameList[index],
					type: this.item.type,
					data: item,
					label: {
						show: this.item.showLabel || false
					},
					emphasis: {
						focus: 'series'
					}

					// symbolSize: 4
				};
				if (this.item.type === 'bar') {
					this.$set(obj, 'itemStyle', {
						color: params => {
							return this.item.color[params.dataIndex];
						}
					});
				}
				if (this.item.markLineList && this.item.markLineList.length > 0) {
					this.$set(obj, 'markLine', {
						data: this.item.markLineList
					});
				}
				this.seriesList.push(obj);
			});
			this.$nextTick(() => {
				this.drawLine();
			});
			window.addEventListener('resize', this.echartsResize);
		},
		echartsResize() {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(() => {
				if (this.optionChart) {
					this.optionChart.resize({
						animation: {
							duration: 250,
							easing: 'cubicInOut'
						}
					});
				}
			}, 400);
		},
		drawLine() {
			const colorList = ['#1b55e2', '#009688', '#e2a03f', '#e7515a', '#6dc8ec', '#5d7092', '#8543e0', '#62daab', '#f6c022'];
			let colorArr = [];
			colorArr = this.item.nameList.map((item, index) => {
				return colorList[index % 9];
			});
			this.optionChart = this.$echar.init(this.$refs['echarts' + this.item.id], 'hgCharts');
			let option = {
				title: {
					// text: `${this.item.title}(${this.item.unit})`,
					// textStyle: {
					// 	fontSize: 12
					// }
					// subtext: `单位（${this.item.unit}）`
				},
				color: this.item.nameList.length == 1 ? colorList[this.item.id % 9] : colorArr,
				tooltip: {
					trigger: 'item',
					confine: true
				},

				legend: {
					show: this.item.type === 'bar' ? false : true,
					data: this.item.nameList
				},
				grid: {
					top: '32%',
					left: '3%',
					right: '6%',
					bottom: '3%',
					containLabel: true
				},
				// toolbox: {
				// 	feature: {
				// 		saveAsImage: {}
				// 	}
				// },
				xAxis: {
					type: 'category',
					boundaryGap: true,
					data: this.item.xDataList
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						show: false,
						formatter: `{value}${this.item.unit}`
					}
				},
				series: this.seriesList
			};
			this.optionChart.setOption(option, true);
		}
	}
};
</script>

<style lang="scss" scoped>

.echart-wrapper {
	border: 1px solid #ebeef5;
	background-color: #fff;
	color: #303133;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	padding: 10px;
	position: relative;
	border-radius: 10px;
	overflow: hidden;
}
.alarm {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 30px;
	background-color: rgba(223, 80, 80, 0.29);
	display: flex;
	align-items: center;
	font-size: 14px;
	padding: 10px;
}
.tag-wrapper {
	padding: 10px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.tag {
	width: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.tagname {
	font-size: 12px;
}
.tagvalue {
	font-size: 12px;
}
/deep/ .el-radio-button--mini .el-radio-button__inner {
	padding: 4px 15px;
}
</style>

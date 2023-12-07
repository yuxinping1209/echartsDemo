<template>
	<div style="height: 100%;">
		<div class="content">
			<div class="main-wrapper">
				<div class="left-wrapper">
					<div class="top-header" @click="showScadaDetail"></div>
					<div class="group" style="height: 56%;">
						<div class="title pointer" @click="showWaterDetail">水质波动预警</div>
						<div class="row2">
							<echartsItem v-for="item in list3" :key="item.id" :item="item" :height="'32%'" :width="'49.5%'">
								<div style="display: flex;justify-content:space-between;">
									<div class="item-title">{{ item.title + '（' + item.unit + '）' }}</div>
									<el-radio-group v-model="item.radio" size="mini" @change="v => changeType(v, item)">
										<el-radio-button label="日"></el-radio-button>
										<el-radio-button label="周"></el-radio-button>
									</el-radio-group>
								</div>
							</echartsItem>
						</div>
					</div>
				</div>
				<div class="middle-wrapper">
					<echartsItem v-for="item in list0" :key="item.id" :item="item" :height="'18.5%'">
						<div style="display: flex;justify-content:space-between;">
							<div class="item-title pointer" @click="showEcharts(item)">{{ item.title + '（' + item.unit + '）' }}</div>
						</div>
					</echartsItem>
					<div class="group" style="height: 42%;">
						<div class="title pointer" @click="showPredictionDetail">水量负荷预测</div>
						<div class="row2" style="flex-direction: column;">
							<echartsItem v-for="item in list2" :key="item.id" :item="item" :height="'49%'">
								<div style="display: flex;justify-content:space-between;">
									<div class="item-title">{{ item.title + '（' + item.unit + '）' }}</div>
								</div>
							</echartsItem>
						</div>
					</div>
					<div class="row1" style="height: 37.8%">
						<echartsItem v-for="item in list5" :key="item.id" :item="item" :height="'49%'">
							<div style="display: flex;justify-content:space-between;">
								<div class="item-title pointer" @click="showEcharts(item)">{{ item.title + '（' + item.unit + '）' }}</div>
							</div>
						</echartsItem>
					</div>
				</div>
				<div class="right-wrapper">
					<div class="group" style="height: 42%;">
						<div class="title pointer" @click="showAlamrDetail">水量负荷预警</div>
						<div class="row2" style="flex-direction: column;">
							<echartsItem v-for="item in list1" :key="item.id" :item="item" :height="'49%'">
								<div style="display: flex;justify-content:space-between;">
									<div class="item-title">{{ item.title + '（' + item.unit + '）' }}</div>
								</div>
							</echartsItem>
						</div>
					</div>
					<div class="row1" style="height: 57%;">
						<echartsItem v-for="item in list4" :key="item.id" :item="item" :height="'32.5%'">
							<div style="display: flex;justify-content:space-between;">
								<div class="item-title pointer" @click="showEcharts(item)">{{ item.title + '（' + item.unit + '）' }}</div>
							</div>
						</echartsItem>
					</div>
				</div>
			</div>
		</div>
		<el-dialog title="生物池" :visible="dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog" width="48%">
			<div>
				<div class="flex a-center"><img src="../assets/process.png" alt="" style="width: 100%;" /></div>

				<div style="margin-top: 20px;">
					<riskItem v-for="(el, i) in 3" :key="el" l>
						<template v-slot:content>
							<span>风险提示{{ el }}</span>
						</template>
					</riskItem>
				</div>
			</div>
		</el-dialog>
		<el-dialog title="水量负荷预警" top="10vh" :visible="dialogVisible1" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog" width="45%">
			<div v-if="dialogVisible1">
				<div v-for="item in list1" :key="item.id">
					<span class="item-title" style="margin-left: 10px;">{{ item.title }}</span>
					<echartsDialogItem v-if="dialogVisible1" :item="item" :height="'250px'"></echartsDialogItem>
				</div>
				<div style="margin-top: 20px;">
					<riskItem v-for="(el, i) in 3" :key="el" l>
						<template v-slot:content>
							<span>风险提示{{ el }}</span>
						</template>
					</riskItem>
				</div>
			</div>
		</el-dialog>
		<el-dialog title="水量负荷预测" :visible="dialogVisible2" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog" width="45%">
			<div v-if="dialogVisible2">
				<div v-for="item in list2" :key="item.id">
					<span class="item-title" style="margin-left: 10px;">{{ item.title }}</span>
					<echartsDialogItem v-if="dialogVisible2" :item="item" :height="'260px'"></echartsDialogItem>
				</div>
			</div>
		</el-dialog>
		<el-dialog title="水质波动预警" top="5vh" :visible="dialogVisible3" :close-on-click-modal="false" :close-on-press-escape="false" @close="closeDialog" width="80%">
			<div v-if="dialogVisible3" class="flex jlr wrap">
				<div v-for="item in list3" :key="item.id" style="width: 33%;">
					<span class="item-title" style="margin-left: 10px;">{{ item.title }}</span>
					<echartsDialogItem v-if="dialogVisible3" :item="item" :height="'260px'">
						<el-radio-group v-model="item.radio" size="mini" @change="v => changeType(v, item)" style="margin-right: 14px;">
							<el-radio-button label="日"></el-radio-button>
							<el-radio-button label="周"></el-radio-button>
						</el-radio-group>
					</echartsDialogItem>
				</div>
				<div class="flex jlr" style="width: 100%;">
					<div style="margin-top: 20px;width: 49%;">
						<riskItem v-for="(el, i) in 3" :key="el" l>
							<template v-slot:content>
								<span>风险提示{{ el }}</span>
							</template>
						</riskItem>
					</div>
					<div style="margin-top: 20px;;width: 49%;">
						<riskItem v-for="(el, i) in 3" :key="el" l>
							<template v-slot:content>
								<span>风险提示{{ el + 3 }}</span>
							</template>
						</riskItem>
					</div>
				</div>
			</div>
		</el-dialog>
		<el-dialog
			:title="currentItem && currentItem.title"
			:visible="dialogVisible4"
			:close-on-click-modal="false"
			:close-on-press-escape="false"
			@close="closeDialog"
			width="35%"
		>
			<echartsDialogItem v-if="dialogVisible4" :item="currentItem" :height="'300px'"></echartsDialogItem>
			<div style="margin-top: 20px;">
				<riskItem v-for="(el, i) in 3" :key="el" l>
					<template v-slot:content>
						<span>风险提示{{ el }}</span>
					</template>
				</riskItem>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { list0, list1, list2, list3, list4, list5 } from './data.js';
import echartsItem from '../components/echartsItem.vue';
import echartsDialogItem from '../components/echartsDialogItem.vue';
import riskItem from '../components/riskItem.vue';
export default {
	components: { echartsItem, echartsDialogItem, riskItem },
	data() {
		return {
			dialogVisible: false,
			dialogVisible1: false,
			dialogVisible2: false,
			dialogVisible3: false,
			dialogVisible4: false,
			currentItem: null,
			list0,
			list1,
			list2,
			list3,
			list4,
			list5
		};
	},
	methods: {
		showScadaDetail() {
			this.dialogVisible = true;
		},
		showWaterDetail() {
			this.dialogVisible3 = true;
		},
		showPredictionDetail() {
			this.dialogVisible2 = true;
		},
		showAlamrDetail() {
			this.dialogVisible1 = true;
		},
		showEcharts(item) {
			this.currentItem = JSON.parse(JSON.stringify(item));
			this.dialogVisible4 = true;
		},
		closeDialog() {
			this.dialogVisible = false;
			this.dialogVisible1 = false;
			this.dialogVisible2 = false;
			this.dialogVisible3 = false;
			this.dialogVisible4 = false;
		},

		changeType(type, item) {
			const index = this.list3.findIndex(el => el.id === item.id);
			if (type == '日') {
				this.$set(this.list3[index], 'xDataList', ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05', '2023-11-06', '2023-11-07']);
				this.$set(this.list3[index], 'yDataList', [[20, 25, 28, 18, 19, 26, 32]]);
			} else {
				this.$set(this.list3[index], 'yDataList', [[20, 25, 28, 18, 19, 26, 32, 25, 10, 34, 16, 24, 20]]);
				this.$set(this.list3[index], 'xDataList', [
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
				]);
			}
		}
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

.main-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
}
.top-header {
	width: 100%;
	height: 42.6%;
	background: url(../assets/logo.png);
	background-size: 100% 100%;
	background-color: #fff;
	border-radius: 10px;
	cursor: pointer;
}
.title {
	padding-bottom: 10px;
	font-weight: bold;
}
.left-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 49.6%;
}
.middle-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 24.6%;
}
.right-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 24.6%;
}
.row1 {
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: space-between;
}
.group {
	border: 1px solid #d1d3d8;
	background-color: #fff;
	color: #303133;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
	padding: 10px;
	border-radius: 10px;
}
.row2 {
	width: 100%;
	height: calc(100% - 30px);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: space-between;
}
.title-icon {
	width: 24px;
	margin-right: 10px;
}
.item-title {
	font-size: 14px;
	font-weight: bold;
}
.pointer {
	cursor: pointer;
}
/deep/ .el-dialog__body {
	padding: 20px 10px;
}
</style>

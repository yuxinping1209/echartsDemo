<template>
	<div :style="styleObj" class="alarm-info flex a-center">
		<img :src="img" alt="" />
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: require('../assets/alarm.png')
		},
		bgColor: {
			type: String,
			default: 'rgba(223, 80, 80, 0.29)'
		},
		borderColor: {
			type: String,
			default: '#df6666'
		},
		border: {
			type: String,
			default: '1px solid'
		}
	},
	data() {
		return {
			styleObj: {}
		};
	},

	mounted() {
		this.styleObj = {
			'background-color': this.bgColor,
			border: this.border,
			'border-color': this.borderColor
		};
	}
};
</script>

<style scoped>
.alarm-info {
	margin: 4px 0;
	padding: 4px;
}
</style>

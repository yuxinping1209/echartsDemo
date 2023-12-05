<template>
	<div class="page">
		<!-- <navBar></navBar> -->
		<div class="view">
			<menuTabs></menuTabs>
			<div class="viewbox">
				<router-view></router-view>
				<!-- <router-tab :page-transition="{ css: false }" /> -->
			</div>
		</div>
	</div>
</template>

<script>
import navBar from './navBar.vue';
import menuTabs from './menuTabs.vue';
export default {
	components: {
		navBar,
		menuTabs
	}
};
</script>

<style>
.page {
	height: 100%;
	display: flex;
}
.view {
	width: 100%;
	height: 100%;
	flex: 1;
	background-color: #f1f2f3;
}

.viewbox {
	height: calc(100% - 45px);
	/* padding: 16px; */
}
.router-tab {
	height: 100%;
}
.custom-tab {
	background-color: #fff;
	border-radius: 3px;
	font-size: 12px !important;
	height: 30px;
	margin-right: 10px;
}
.router-tab__item.is-active,
.router-tab__item:hover {
	color: #2a60e4 !important;
}

.router-tab-page {
	height: 100%;
}
</style>

<template>
<div v-if="open">
	<div class="modal show"></div>
	<div class="calendar">
		<div class="flex justifyCenter show-time">
			<div  class="flex">
				<div :class="[!startTime && 'no-op-t']">{{startTime || '开始' }}</div>
				<div class="center">-</div>
				<div :class="[!endTime && 'no-op-t']">{{endTime || '结束' }}</div>
			</div>
			<div class="clear-box" v-on:click="clearOp" :class="[startTime2 && endTime2 && 'clear-ok']">清空</div>
		</div>
		<StarView />
		<!-- 用事件委托， 避免性能问题 , tip, 之所以放两个data tag是因为js这样就可以避免先上递归操作-->
		<div class="scroll" @click="siteTouch">
			<div class="inner" v-for="(o, index) in list" :key="index"> 
				<p class="moth-name">{{o.name}}</p>
				<div
				 :data-clickTg="item.timev"
				 class="block" 
				 :class="[
				 	// 今日
				 	nowTimeStr === item.timev && 'noew-time-box',
					// 过期
					nowTimeStr && +new Date(item.timev) > +new Date(nowTimeStr) && 'is-exp'
				 ]"
				 v-for="item in o.m" 
				 :key="item" 
				>
					<span 
					 class="time-text-box" 
					 :data-clickTg="item.timev" 
					 :style="{'opacity': !item.v ? '0' : '1'}" 
					 :class="[	
						// 选择了起始点
						startTime2 === item.timev &&  endTime2 ? 'start-time-box' : '',
						endTime2 === item.timev && startTime2 ? 'end-time-box' : '',
						startTime2 === item.timev &&  !endTime2 ? 'start-time-one-box' :'',
						endTime2 === item.timev &&  !startTime2 ? 'end-time-one-box' :'',
						isTimeCenter(startTime2, endTime2, item.timev) && 'start-to-end-box'
					 ]"
					 >{{item.v}}</span>
				</div>
			</div>
		</div>
		<!-- 显示结果 -->
		<div class="success" v-on:click="success" :class="[startTime2 && endTime2 && 'success-ok']">
			显示结果
		</div>
	</div>
</div>
</template>

<script>
	import Out from './js'
	export default Out()
</script>

<style  scoped>
@import './style/style.less';
</style>
/**
 * @FilePath: /amy/src/pages/index/index.vue
 * @description: 
 * @author: yanxiaosong@qiniu.com
 * @Date: 2021-05-28 12:51:18
 * @LastEditors: your name
 * @LastEditTime: 2021-05-28 15:36:04
 */
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
			<text class="name">{{ name}}</text>
		</view>
		<input type="text" v-model="title">
		<navigator url="/pages/signin/index" hover-class="navigator-hover">
			<button type="default">跳转到新页面1</button>
		</navigator>
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello app'
			}
		},
		computed: {
			...mapState(['name'])
		},
		watch: {
			title: function(val) {
				this.SET_USER_NAME(val)
			}
		},
		onLoad() {
			console.log('mounted')
		},
		methods: {
			...mapMutations(['SET_USER_NAME']),
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

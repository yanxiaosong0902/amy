/**
 * @FilePath: /amy/src/pages/signin/index.vue
 * @description: 
 * @author: yanxiaosong@qiniu.com
 * @Date: 2021-05-28 14:37:26
 * @LastEditTime: 2021-05-28 18:02:10
 */

<template>
	<view class="padding-lr-40">
		<view class="login_top">验证码登录/注册</view>
		<view class="cellpone-wrapper">
			<view class="cellphone-location">
				<text class="location">{{ location }}</text>
				<picker class="location-picker" :range="locations" range-key="cn" :value="locationIndex" @change="setLocation">
					<view>{{ locations[locationIndex].cn }}</view>
				</picker>
			</view>
		</view>
		<view class="flex_content page-signin">
			<view class="area_code flex_content" style="position: relative;">
				<view class="flex_content" @tap="pull" style="position: relative;">
					<view class="area_code_num">{{phonetittle}}</view>
					<view class="area_code_jiantou">
						<image src="https://www.zhijiaojia.cn/zkb/img/main/bottom_jianyou.png" mode=""></image>
					</view>
					<view class="international" style="left: 0rpx;" v-if="show">
					  <view v-for="(item,index) in listitem" :key="index">
					    <view class="" @click="area_code(item)">
					      <text>({{item.cn}})</text>
					      <text>{{item.code}}</text>
					    </view>
					  </view>
					</view>
				</view>
			</view>
			<view class="cell-phone_number">
				<input type="text" @blur='redph()' v-model="phone" @input="onInput" maxlength="11" placeholder="请输入手机号" />
			</view>
		</view>
		<button class="getCode" v-show="InputLength==''" type="default">获取验证码</button>
		<button class="getCode active" v-show="!InputLength==''" type="default"  @click="getCord" open-type="getUserInfo" @getuserinfo="getuserindex">获取验证码</button>
		<navigator class="Account_password" url="/pages/login/AccountPassword" hover-class="none">账户密码登录</navigator>
	</view>
</template>

<script>
	import { locationList } from '@/static/js/country.js'
	export default {
		data() {
			return {
				InputLength: '',
				phone: '',
				// locations: locationList.list.map((item) => item.cn),
				locations: locationList.list,
				show: false,
				location: '+86',
				locationIndex: 3
			}
		},
		watch: {
			locationIndex: function(index) {
				console.log(index)
				this.location = this.locations[index].code
			}
		},
		methods:{
			setLocation(e) {
				// this.location = locations[e.target.value].code
				console.log(e)
			},
			onKeyInput(event) {
			   this.inputValue = event.target.value
			},
			pull(){
			  this.show = this.show == false?true:false
			},
			area_code(item){
			  this.phonetittle = item.code
			},
			onInput(e){
				console.log(e.detail)
				this.InputLength = e.detail
			},
			// 电话验证
			redph() {
				const reg = RegExp(/^1[0-9]{10}$/);
				if(!reg.test(this.phone)){
					uni.showToast({
						title:"请输入正确手机号",
						icon:"none"
					})
				}else{
					
				}
			},
			// 获取验证码
			getCord(){
				let params = {
					isShow: true,
					url: 'sms/send',
					data: {
						mobile: this.phone,
						event:'mobilelogin'
					}
				}
				this.$requests(params,(res)=>{
					console.log(res)
					if(res.code==200){
						console.log(res.code)
						uni.navigateTo({
							url:"/pages/login/verificationCode"
						})
						uni.setStorageSync('userPhone', this.phone);
					}else{
						uni.showToast({
							title:res.msg,
							icon:"none"
						})
					}
					
				})
			},
			getuserindex(e){
				console.log(e)
				uni.setStorageSync('userInfo', e.detail.userInfo);
				uni.login({
					success:(suc)=>{
						console.log(suc,2666)
						uni.setStorageSync('js_code', suc.code);
					},
					fail:()=>{
						return;
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '~@/common/css/style.css';
	.page-signin {
		border-bottom: 2rpx solid #F7F7F7;
		margin-top: 90rpx;
		padding-bottom: 17rpx;
		.area_code {
			width: 86rpx;
			.area_code_num{
				font-size: 30rpx;
				font-weight: 400;
				color: #333333;
			}
			.area_code_jiantou {
				width: 13rpx;
				height: 8rpx;
				image{
					width: 100%;
					height: 100%;
					margin-bottom: 24rpx;
					margin-left: 12rpx;
				}
			}
		}
		.cell-phone_number{
			margin-left: 40rpx;
			input{
				font-size: 30rpx;
				font-weight: 400;
			}
		}
		
	}
	.getCode{
		width: 670rpx;
		height: 92rpx;
		line-height: 92rpx;
		background: #CAEEF4;
		border-radius: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #F2FDFF;
		margin-top: 50rpx;
	}
	.active{
		background: #2DBDD8;
	}
	.Account_password{
		font-size: 24rpx;
		font-weight: 400;
		color: #666666;
		margin-top: 30rpx;
	}
</style>

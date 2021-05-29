/**
 * @FilePath: /amy/src/App.vue
 * @description: 
 * @author: yanxiaosong@qiniu.com
 * @Date: 2021-05-28 12:51:18
 * @LastEditors: your name
 * @LastEditTime: 2021-05-28 16:50:53
 */
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'common/css/public.css';
	@import 'common/css/iconfont/iconfont.css';
	@import "common/css/index-app.css";
	@import "common/css/bottom_nav.css";
	/* @import "colorui/main.css"; */
	/* @import "colorui/icon.css"; */
	/*每个页面公共css */
</style>

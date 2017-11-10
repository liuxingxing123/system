<template>
  <div class="header">
  		<div class="header-logo">
  			<img width="140" height="100" src="./companylogo.png" alt="成都丰煜科技有限公司" title="成都丰煜科技有限公司">
  		</div>
  		<div class="header-right">
  			<img width="500" src="./header-right.png" alt="智慧设备管理解决方案" title="智慧设备管理解决方案" height="100">
  		</div>
  </div>
</template>

<script>
export default {
  name: 'vueheader'
}
</script>

<style scoped>
	.header{
		background:;
		height: 100px;
		display: flex;
		overflow: hidden;
	}
	.header .header-logo{
		flex: 0 0 140px;
	}
	.header .header-logo img{
		width: 100%;
		display: block;
		height: 100%;
	}
	.header .header-right{
		flex:1;
		background: #4e9f8e;
		position: relative;
	}
	.header .header-right img{
		display: block;
		position: absolute;
		left: 50%;
		margin-left: -250px;
	}
</style>

<template>
	<div class="nav10">
		<div class="top">
			<h4>借用人凭员工卡即可进行借还记录查询</h4>
			<p>1、支持工具查询功能：包括查询每类工具的在库情况、借用情况；
不同查询条件，如抽屉号等的综合查询；
</p>
			<p>2、支持入库记录查询；
</p>
			<p>3、支持出库记录查询。</p>
		</div>
		<div class="bottom">
			<img src="./guihuantime.png" alt="">
			<img src="./numbernoenough.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.nav10 h4{
		text-align: center;
		line-height: 24px;
		font-size: 18px;
		color: #000;
	}
	.nav10 p{
		padding: 10px 20px;
		text-align: left;
		line-height: 24px;
		font-size: 16px;
		color: #999;
		padding-bottom: 0;
	}
	.bottom {
		width: 100%;
	}
	.bottom img{
		display: block;
		width: 96%;
		margin: 10px auto;
	}
</style>
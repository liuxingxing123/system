<template>
	<div class="nav1">
		<div class="left"><img src="./problemfaceclass.png" ></div>
		<div class="right"><img src="./problemsface.png" alt=""></div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.nav1{
		width: 100%;
		font-size: 0;
		overflow: hidden;
	}
	.nav1 .left{
		display: inline-block;
		width: 40%;
		float: left;

	}
	.nav1 .left img{
		display: block;
		width: 90%;
		margin: 10px auto;
	}
	.nav1 .right{
		display: inline-block;
		width: 60%;
		float: right;
	}
	.nav1 .right img{
		display: block;
		width: 90%;
		margin: 10px auto;
	}
</style>
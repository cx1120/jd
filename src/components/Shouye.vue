<template>
	<div class="box">
		<div class="left"><img src="../assets/img/list.png" /></div>
		<div class="rem">
			<img src="../assets/img/666.png" />
			<input type="text" id="zhong" value="" />

		</div>
		<div class="right">
			<a href="#">京东</a>
		</div>
	</div>

</template>

<script>
</script>

<style>
	html {
		font-size: calc(100vw/7.5);
	}
	
	body {
		font-family: "微软雅黑";
		font-size: 0.14rem;
		margin: 0px;
		background-color: #fff;
	}
	
	.box {
		width: 100%;
		height: 0.8rem;
		position: fixed;
		background-color: red;
		z-index: 9999;
	}
	
	.box>div {
		float: left;
	}
	
	.left {
		width: 0.9rem;
		height: 0.8rem;
	}
	
	.left img {
		width: 0.4rem;
		padding: 0.2rem;
	}
	
	.rem {
		height: 0.8rem;
		width: 5.4rem;
		padding-top: 0.12rem;
		box-sizing: border-box;
		position: relative;
	}
	
	.rem img {
		position: absolute;
		width: 0.26rem;
		color: #afafaf;
		top: 0.28rem;
		left: 0.5rem;
	}
	
	.rem input {
		padding-left: 1.2rem;
		font-size: 0.25rem;
		width: 100%;
		height: 0.56rem;
		border-radius: 0.28rem;
		border: none;
		outline: none;
		box-sizing: border-box;
	}
	
	.right {
		width: 0.9rem;
		height: 0.8rem;
		background-color: red;
		right: 0;
		font-size: 0.3rem;
		line-height: 0.8rem;
		position: absolute;
	}
	
	.right a {
		text-decoration: none;
		color: white;
	}
</style>
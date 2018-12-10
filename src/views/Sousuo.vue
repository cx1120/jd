<template>
	<div class="home">
		<div class="top">
			<span>消息</span>
			<a><img src="../assets/img/geren.png" /></a>
			<a>+</a>
		</div>

		<div class="top-2">
			<ul>
				<li>
					<a><img src="../assets/img/wuliu.png" /></a><span>交易物流</span></li>
				<li>
					<a><img src="../assets/img/xiaoxi--1.png" /></a><span>通知消息</span></li>
				<li>
					<a><img src="../assets/img/xiaoxi--2.png" /></a><span>互动消息</span></li>
			</ul>

		</div>
		<!--  隔断         -->
		<div style="margin-top: 0.6rem;"></div>
		<!--  消息层      -->

		<div class="deom" id="app">
			<ul v-for="(item,index) in xiao">
				<li>
					<img v-bind:src="item.image" />
					<span v-text="item.title"></span>
					<small v-text="item.wenben"></small>
				</li>
			</ul>

		</div>
		<Bottem></Bottem>
	</div>
</template>

<script>
	import Bottem from "@/components/Bottem"
	export default {
		data() {
			return {
				xiao: [{
					title: '七匹狼服饰',
					wenben: '[系统消息]',
					image: require('../assets/img/b1.jpg')
				}, {
					title: '飞莱儿科技',
					wenben: '[系统消息]',
					image: require('../assets/img/b1.jpg')
				}, {
					title: '清文图书专营店',
					wenben: '[系统消息]',
					image: require('../assets/img/b1.jpg')
				}, {
					title: '惠达教育',
					wenben: '[系统消息]',
					id: 4,
					image: require('../assets/img/b1.jpg')
				}, {
					title: '安宝笛旗舰店',
					wenben: '[系统消息]',
					image: require('../assets/img/b1.jpg')
				}, {
					title: '米邦家具专营店',
					wenben: '[系统消息]',
					image: require('../assets/img/b1.jpg')
				}]
			}

		},
		components: {
			Bottem
		}
	}
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
	/*      top    */
	
	.top {
		width: 100%;
		height: 2.5rem;
		background-color: orange;
		position: relative;
	}
	
	.top span {
		font-size: 0.3rem;
		font-family: "宋体";
		position: absolute;
		top: 0.5rem;
		left: 0.4rem;
		color: #fff;
	}
	
	.top a img {
		margin: 0;
		padding: 0;
		width: 0.3rem;
		height: 0.3rem;
		position: absolute;
		top: 0.5rem;
		right: 1.5rem;
	}
	
	.top a {
		font-size: 0.4rem;
		float: right;
		margin-top: 0.35rem;
		margin-right: 0.4rem;
		color: white;
	}
	/*   top - 2 */
	
	.top-2 {
		width: 100%;
		position: absolute;
		top: 1.2rem;
	}
	
	.top-2 ul {
		width: 80%;
		height: 1.6rem;
		margin: 0;
		padding: 0;
		margin-left: 10%;
		border-radius: 0.3rem;
		background-color: white;
		box-shadow: 0 0.1rem 0.1rem #999;
	}
	
	.top-2 ul li {
		list-style: none;
		float: left;
		margin-right: 20%;
		margin-top: 0.2rem;
	}
	
	.top-2 ul li:nth-child(1) {
		margin-left: 10%;
	}
	
	.top-2 ul li:nth-child(3) {
		margin-right: 0;
	}
	
	.top-2 ul li a {
		display: block;
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		background-color: dodgerblue;
	}
	
	.top-2 ul li:nth-child(2) a {
		background-color: orange;
	}
	
	.top-2 ul li:nth-child(3) a {
		background-color: green;
	}
	
	.top-2 ul li a img {
		width: 0.6rem;
		height: 0.6rem;
		margin: 0.1rem;
		text-align: center;
		border-radius: 50%;
	}
	
	.top-2 ul li span {
		display: block;
		margin-top: 0.1rem;
		font-size: 0.21rem;
		font-family: arial;
	}
	/*   消息      */
	
	.deom {
		width: 100%;
		height: 1.2rem;
	}
	
	.deom ul {
		padding: 0;
		margin: 0;
	}
	
	.deom ul li {
		height: 1.2rem;
		list-style: none;
		position: relative;
		border-bottom: 1px solid #000;
	}
	
	.deom ul li img {
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 0.2rem;
		margin-left: 0.3rem;
		margin-top: 0.2rem;
	}
	
	.deom ul li span {
		position: absolute;
		font-size: 0.3rem;
		left: 1.3rem;
		top: 0.15rem;
	}
	
	.deom ul li small {
		display: block;
		color: #999;
		font-size: 0.25rem;
		margin-left: 1.3rem;
		margin-top: -0.4rem;
	}
</style>
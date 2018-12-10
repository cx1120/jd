<template>
	<div class="floot-3" id="app">
		<ul v-for="(item,index) in goods">
			<li>
				<img :src="item.image" />
				<span v-text="item.title"></span>
				<div class="hoty">$<span v-text="item.price"></span></div>
				<a href="#">找相似</a>

			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: {
			all: false,
			goods: [{
				title: '图拉斯 苹果X/XS/XR钢化膜iPhone XS Max全屏全覆盖6D抗蓝光玻璃手机贴膜前后背膜 5.8英寸【X/XS通用】高清款★真6D全屏隐形膜',
				price: 18.8,
				image: require('../assets/img/shoujike.jpg')
			}, {
				title: '跑车玩具回力车子小汽车玩具车男孩儿童玩具车模型合金仿真礼盒装你姑姑胡思思恩',
				price: 239,
				image: require('../assets/img/qiche-1.jpg')
			}, {
				title: '图拉斯 苹果X/XS/XR钢化膜iPhone XS Max全屏全覆盖6D抗蓝光玻璃手机贴膜前后背膜 5.8英寸【X/XS通用】高清款★真6D全屏隐形膜',
				price: 18.8,
				image: require('../assets/img/shoujike.jpg')
			}, {
				title: '图拉斯 苹果X/XS/XR钢化膜iPhone XS Max全屏全覆盖6D抗蓝光玻璃手机贴膜前后背膜 5.8英寸【X/XS通用】高清款★真6D全屏隐形膜',
				price: 18.8,
				image: require('../assets/img/shoujike.jpg')
			}, {
				title: '图拉斯 苹果X/XS/XR钢化膜iPhone XS Max全屏全覆盖6D抗蓝光玻璃手机贴膜前后背膜 5.8英寸【X/XS通用】高清款★真6D全屏隐形膜',
				price: 18.8,
				image: require('../assets/img/shoujike.jpg')
			}, {
				title: '图拉斯 苹果X/XS/XR钢化膜iPhone XS Max全屏全覆盖6D抗蓝光玻璃手机贴膜前后背膜 5.8英寸【X/XS通用】高清款★真6D全屏隐形膜',
				price: 18.8,
				image: require('../assets/img/shoujike.jpg')
			}]
		}
	}
</script>

<style>
	.bog {
		width: 100%;
		height: 0.7rem;
		text-align: center;
		font-family: "微软雅黑";
		font-size: 0.3rem;
		background-color: #F0F2F5;
		line-height: 0.7rem;
	}
	
	.floot-3 {
		width: 100%;
		height: 20rem;
		background-color: #F0F2F5;
	}
	
	.floot-3 ul {
		width: 49%;
		height: 5rem;
		margin: 0;
		padding: 0;
		background-color: #fff;
		list-style: none;
		overflow: hidden;
		position: relative;
		margin-right: 2%;
		margin-bottom: 2%;
		float: left;
	}
	
	.floot-3 ul:nth-child(2n) {
		margin-right: 0;
	}
	
	.floot-3 ul li img {
		width: 100%;
		height: 3.5rem;
	}
	
	.floot-3 ul li span {
		text-align: center;
		width: 100%;
		height: 0.65rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		color: black;
		font-size: 0.24rem;
	}
	
	.floot-3 ul li .hoty {
		width: 1.2rem;
		height: 0.3rem;
		position: absolute;
		bottom: 0.45rem;
		left: 0.2rem;
		font-size: 0.3rem;
		color: red;
	}
	
	.floot-3 ul li .hoty span {
		height: 0.3rem;
		line-height: 0.3rem;
		position: relative;
		bottom: 0.35rem;
		left: -0.1rem;
		color: red;
		font-size: 0.3rem;
	}
	
	.floot-3 ul li a {
		position: absolute;
		text-decoration: none;
		box-shadow: 0 0 0.1rem #666;
		background-color: #fff;
		color: #666;
		right: 0.2rem;
		bottom: 0.36rem;
		width: 0.8rem;
		height: 0.3rem;
		font-size: 0.24rem;
		text-align: center;
		line-height: 0.3rem;
	}
</style>
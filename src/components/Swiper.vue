<template>
	
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="../assets/img/swiper_1.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../assets/img/swiper_2.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../assets/img/swiper_3.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../assets/img/swiper_4.jpg">
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from "swiper"

	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});

		}
	}
</script>

<style>
	@import url("../assets/css/swiper.css");
	
	.swiper-container {}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
</style>
<template>
	<div class="home">
       <Shouye></Shouye>
       <Swiper></Swiper>
       <Zujian></Zujian>
       <Dibu></Dibu>
       <Bottem></Bottem>
  </div>
</template>

<script>
	import Bottem from "@/components/Bottem"
	import Shouye from "@/components/Shouye"
	import Swiper from "@/components/Swiper"
	import Zujian from "@/components/Zujian"
	import Dibu from "@/components/Dibu"
	
	export default {
		components: {
			Shouye,
			Swiper,
			Bottem,
			Zujian,
			Dibu
		}
	}
</script>
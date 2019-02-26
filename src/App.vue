<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<div class="full-height"></div>
		<ns-odometer :initial="0" :value="245"></ns-odometer>
		<div class="full-height"></div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NsOdometer from '@/components/ns-odometer.vue'
export default {
	name: 'app',
	components: {
		HelloWorld,
		NsOdometer
	}
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.full-height {
	background-color: navy;
	height: 100vh;
}
</style>

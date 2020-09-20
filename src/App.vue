<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<Nav />
		<div class="main-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue';

export default {
	name: 'App',
	components: {
		// HelloWorld
		Nav
	}
}
</script>

<style>

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	transition: all 150ms ease-in-out;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #333;
	max-width: 700px;
	margin: 0 auto;
	margin-top: 50px;
	/* text-align: center; */
}

.main-content {
	margin-top: 50px;
}

h1 {
	margin-bottom: 50px;
}

a {
	color: #333;
	display: block;
	text-decoration: none;
}

a:hover {
	opacity: 0.5;
}

.input {
	width: 100%;
	padding: 10px;
	border-radius: 4px;
	border: 1px solid #b3b1b1;
	margin-bottom: 20px;
}

.btn {
	width: 100%;
	padding: 20px;
	cursor: pointer;
	background-color: #3498db;
	color: #fff;
	border: none;
	border-radius: 4px;
}

.input:focus {
	outline: none;
}

p {
	line-height: 25px;
}

.finished {
	text-align: center;
	margin-top: 20px;
	color: green;
}
</style>

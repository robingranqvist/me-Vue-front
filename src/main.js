import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

// Routes
import Home from './pages/Home';
import Reports from './pages/Reports';
import NotFound from './pages/404';
import Login from './pages/Login';
import Register from './pages/Register';

// // Weeks
// import Week1 from './weeks/Week1';
// import Week2 from './weeks/Week2';

// Post
import Post from './components/Post';

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home },
	{ path: '/reports', component: Reports },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	// Weeks
	// { path: '/reports/week/1', component: Week1 },
	// { path: '/reports/week/2', component: Week2 },
	{ path: '/reports/week/:id', component: Post },
	{ path: '*', component: NotFound }
];

const router = new VueRouter({
	routes: routes,
	mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router: router,
}).$mount('#app')

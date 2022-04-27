// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App.vue';

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});

// Note: Most likely not needed !!
// if (module.hot) {
// module.hot.accept();
// }

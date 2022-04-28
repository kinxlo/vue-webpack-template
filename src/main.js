// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App.vue';

// import vuetify
import vuetify from '@/plugins/vuetify'

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app');

// Note: Most likely not needed !!
// if (module.hot) {
// module.hot.accept();
// }

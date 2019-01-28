/**
 * @author Ndifon Desmond
 * @package malico-official-website
 */

require('./bootstrap/');

import Vue from 'vue';
import VueRouter from 'vue-router';


import App from './app/';
import router from './router/';
import inter from './i18n/';

/**
 * Components
 */
import NavBar from './comp/NavBar';

Vue.component('nav-bar', NavBar);

Vue.use(VueRouter)


new Vue({
    router,
    inter,
    render: h => h(App)
}).$mount('#app');

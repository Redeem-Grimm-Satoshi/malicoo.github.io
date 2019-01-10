/**
 * @package Malico
 * @author Ndifon Demond Yong
 * @version 2.0.1
 */


/**
 * External Imports
 */
import Vue from 'vue';

import VueMeta from 'vue-meta';
import VueRouter from "vue-router";

/**
 * Plugins Init
 */

Vue.use(VueMeta);
Vue.use(VueRouter);

/**
 * Internal Imports
 */
import App from "./app";
import router from "./router";

/**
 * App
 */

const i18n = vuei18n;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
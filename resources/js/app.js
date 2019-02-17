/**
 * @author Ndifon Desmond
 * @package malico-official-website
 */

require('./bootstrap/');

import Vue from 'vue';
import VueRouter from 'vue-router';
import LightTimeline from 'vue-light-timeline';
import VueHead from 'vue-head';
import SocialSharing from 'vue-social-sharing';


import App from './app/';
import router from './router/';
import inter from './i18n/';


/**
 * Components
 */
import NavBar from './comp/NavBar';
import Mixin from './mixin';

Vue.component('nav-bar', NavBar);

Vue.use(VueRouter);
Vue.use(LightTimeline);
Vue.use(VueHead);
Vue.use(SocialSharing);

Vue.mixin(Mixin);

new Vue({
    router,
    i18n: inter,
    render: h => h(App),
    created() {
        let self = this;
        window.axios.interceptors.response.use(
            response => response,
            error => {
                switch (error.response.status) {
                    case 500:
                        self.$emit('error500', error.response.data.message);
                        break;

                    case 404:
                        self.$emit('error404', error.response.data.message);
                        break;

                    case 401:
                        self.$emit('error404', error.response.data.message);
                        break;
                }

                return Promise.reject(error);
            }
        );
    },

    mounted() {
        this.$on('httpError', message => this.alertError(message));
    }

}).$mount('#app');

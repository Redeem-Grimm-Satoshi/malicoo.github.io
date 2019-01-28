import VueRouter from 'vue-router'

import home from '@/pages/home';
import blog from '@/pages/blog';
import layout from '@/pages/layout';

const locale = require('browser-locale')();
const localeLang = (locale || 'en-US').substring(0, 2);

let router = new VueRouter({

    mode: 'history',

    routes: [

        {
            path: '*',
            redirect: `/${localeLang}/`
        },

        {
            path: '/blog',
            redirect: `/${localeLang}/~`
        },

        {
            path: '/~',
            redirect: `/${localeLang}/~`
        },


        {
            path: '/:lang',
            component: layout,
            children: [

                {
                    path: '~',
                    component: blog,
                    alias: 'blog',
                    name: 'blog',
                },

                {
                    path: '~:title',
                    component: home,
                    alias: 'blog',
                },

                {
                    path: '',
                    component: home,
                    name: 'home'
                }

            ]
        }
    ]
})

export default router

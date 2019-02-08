import VueRouter from 'vue-router'

import home from '@/pages/home';
import blog from '@/pages/blog';
import layout from '@/pages/layout';

// Language
let lang = window.malico.lang;

let router = new VueRouter({

    mode: 'history',

    routes: [

        {
            path: `/${lang}/`,
            component: layout,

            children: [

                {
                    path: '~',
                    component: blog,
                    alias: 'blog',
                    name: 'blog',
                },

                {
                    path: '$',
                    component: blog,
                    alias: 'work',
                    name: 'work',
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

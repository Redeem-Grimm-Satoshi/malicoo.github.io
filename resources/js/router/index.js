import VueRouter from 'vue-router'

import home from '@/pages/home';
import about from '@/pages/about';
import blog from '@/pages/blog';
import open from '@/pages/open';
import p404 from '@/pages/p404';
import contact from '@/pages/contact';
import timeline from '@/pages/timeline';
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
                    children: [

                        {
                            path: ':post',
                            component: blog,
                            name: 'post'
                        }
                    ]
                },

                {
                    path: '$',
                    component: blog,
                    alias: 'work',
                    name: 'work',
                },
                {
                    path: 'about',
                    component: about,
                    alias: 'about-us',
                    name: 'about',

                },

                {
                    path: 'about/time',
                    alias: 'about/time-line',
                    name: 'timeline',
                    component: timeline
                },

                {
                    path: 'contact',
                    component: contact,
                    alias: 'hire',
                    name: 'contact',
                },

                {
                    path: 'open-source',
                    component: open,
                    alias: 'open',
                    name: 'open',
                },

                {
                    path: '',
                    component: home,
                    name: 'home'
                },
                {
                    path: '*',
                    component: p404,
                    name: 'p404'
                },


            ]
        }
    ]
})

export default router

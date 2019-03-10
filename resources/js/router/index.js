import VueRouter from 'vue-router'

let home = () => import( /*webpackChunkName: "js/parts/home" */ '@/pages/home');
let about = () => import( /*webpackChunkName: "js/parts/about" */ '@/pages/about');
let blog = () => import( /*webpackChunkName: "js/parts/blog" */ '@/pages/blog');
let open = () => import( /*webpackChunkName: "js/parts/open" */ '@/pages/open');
let work = () => import( /*webpackChunkName: "js/parts/work" */ '@/pages/work');
let p404 = () => import( /*webpackChunkName: "js/parts/404" */ '@/pages/p404');
let contact = () => import( /*webpackChunkName: "js/parts/contact" */ '@/pages/contact');
let timeline = () => import( /*webpackChunkName: "js/parts/timeline" */ '@/pages/timeline');

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
                    component: work,
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

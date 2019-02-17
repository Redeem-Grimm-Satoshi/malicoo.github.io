<template>
    <headroom class="border-very-light" :class="{ 'bg-contrast border-b-1' : pinned}" :onNotTop="switchHead" :onTop="switchFalse">
        <div class="container">
            <div id="my-id" uk-offcanvas="push">
                <div class="uk-offcanvas-bar">
                    <ul class="uk-nav uk-nav-default">
                        <li>
                            <router-link :to="{ name : 'work'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                                Work
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'about'" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'blog'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                                Blog
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <nav class="flex items-center justify-around flex-wrap py-6">
                <div class="flex items-center py-2  lg:hidden text-teal-lighter hover:text-white hover:border-white">
                    <hamburguer uk-toggle="target: #my-id" />
                </div>
                <div class="w-full block hidden lg:visible flex-grow lg:flex lg:items-center px-3 lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <slot name="before" class="mr-5"></slot>
                        <router-link :to="{ name : 'work'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" active-class="active">
                            {{ $t('navbar.work') }}
                        </router-link>
                        <router-link :to="{ name: 'about'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" active-class="active">
                            {{ $t('navbar.about') }}
                        </router-link>
                        <router-link :to="{name: 'open'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" active-class="active">
                            {{ $t('navbar.open_source') }}
                        </router-link>
                        <router-link :to="{ name: 'blog'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white" active-class="active">
                            {{ $t('navbar.blog') }}
                        </router-link>
                    </div>
                </div>
                <div class="lg:w-1/3 flex justify-center font-mono">
                    <router-link :to="{name: 'home'}">
                        <strong class="text-primary">M </strong> <span class="text-sm text-light">-</span> <strong class="text-primary-dark">Y </strong>
                    </router-link>
                </div>
                <div class="lg:w-1/3 flex justify-end">
                    <router-link :to="{ name: 'contact' }" class="link text-sm px-4 py-2 leading-none border text-white border-light hover:border-2 hover:border-primary hover:text-primary hover:bg-transparent mt-4 lg:mt-0"> {{ $t('navbar.hire' )}}
                        <span uk-icon="icon: arrow-right"></span>
                    </router-link>
                </div>
            </nav>
        </div>
    </headroom>
</template>
<script>
import { headroom } from 'vue-headroom';
import hamburguer from './hamburguer';
import TweenMax from 'gsap/TweenMax';


export default {
    components: {
        headroom,
        hamburguer
    },

    data() {
        return {
            pinned: false,
        }
    },

    mounted() {
        TweenMax.staggerFrom(
            '.link',
            0.8, {
                opacity: 0,
                top: -10
            }, 0.2)
    },

    methods: {
        switchHead(self = this) {
            self.pinned = true;
        },
        switchFalse(self = this) {
            self.pinned = false;
        }
    }
}

</script>
<style lang="scss">
body {
    padding-top: 5rem;
}

.link {
    position: relative;
}

.active {
    color: #000;
    font-weight: 700;
}

</style>

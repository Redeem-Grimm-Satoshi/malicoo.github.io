<template>
    <headroom>
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
            <nav class="flex items-center justify-between flex-wrap bg-teal py-6">
                <div class="flex items-center py-2  lg:hidden text-teal-lighter hover:text-white hover:border-white">
                    <hamburguer uk-toggle="target: #my-id" />
                </div>
                <div class="w-full block hidden lg:visible flex-grow lg:flex lg:items-center px-3 lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <router-link :to="{ name : 'work'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Work
                        </router-link>
                        <router-link :to="'about'" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            About
                        </router-link>
                        <router-link :to="{ name: 'blog'}" class="block link mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                            Blog
                        </router-link>
                    </div>
                </div>
                <div>
                    <a href="#" class="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"> Hire 
                        </a>
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

        }
    },

    mounted() {
        TweenMax.staggerFrom(
            '.link',
            1, {
                opacity: 0,
                top: -10
            }, 0.5)
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

</style>

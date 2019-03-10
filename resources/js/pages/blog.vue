<template>
    <div class="home">
        <nav-bar>
            <router-link v-if="single" class="mr-5" vp slot="before" :to="{ name: 'blog'}">
                <span uk-icon="icon: arrow-left"></span>
            </router-link>
        </nav-bar>
        <div class="container mb-8 mx-auto" v-if="!single">
            <div class="text-center text-white pb-8">
                <h1 class="font-sans font-thin"> {{ $t('blog.title') }} </h1>
            </div>
        </div>
        <div class="container">
            <div class="flex">
                <blog-main v-if="!single" class="w-2/3" :class="{ single: 'mx-auto'}" />
                <single-blog v-if="single" :slug="$route.params.post" class="mx-auto" />
            </div>
        </div>
    </div>
</template>
<script>
import BlogMain from "./comp/BlogMain";
import SingleBlog from "./comp/SingleBlog";
import TweenMax from 'gsap/TweenMax';
export default {

    data() {
        return {
            single: false,
        }
    },

    components: {
        BlogMain,
        SingleBlog
    },

    head: function() {
        return {
            title: {
                inner: this.$t('blog.title')
            },
        }
    },

    mounted() {
        this.check();
    },


    watch: {
        '$route'(to, from) {
            this.check();
        }
    },

    methods: {
        check() {
            if (this.$route.params.post) {
                this.single = true;
            } else {
                this.single = false;
            }
        }
    }

}

</script>

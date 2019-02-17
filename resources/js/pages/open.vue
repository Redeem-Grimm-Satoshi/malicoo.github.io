<template>
    <div class="home">
        <nav-bar />
        <div class="container mb-8 mx-auto">
            <div class="text-center text-white pb-8">
                <h1 class="font-sans font-thin">Open Sourcing</h1>
                <h2 class="font-thin text-sm tracking-wide mt-2 mb-4">Few Projects I've worked on</h2>
            </div>
        </div>
    </div>
</template>
<script>
import BlogMain from "./comp/BlogMain";
import TweenMax from 'gsap/TweenMax';
export default {

    components: {
        BlogMain
    },

    head: function() {
        return {
            title: {
                inner: this.$t('open.title')
            },
        }
    },

    mounted() {
        TweenMax.from(
            '.title',
            1, {
                left: -20,
                opacity: 0.5,
                delay: 1
            })
    }

}

</script>

<template>
    <div class="flex">
        <div class="w-1/3 border border-very-light border-dashed">
            <div class="uk-text-center">
                <router-link :to="{name: 'post', params: { 'post': post.slug }}" class="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img class="p uk-transition-scale-up uk-transition-opaque" :src="post.featured_image" alt="">
                </router-link>
            </div>
        </div>
        <div class="w-2/3 pl-8">
            <div class="flex h-full flex-col justify-between">
                <router-link :to="{name: 'post', params: { 'post': post.slug }}" class="top">
                    <h5 class="p">{{ post.title }}</h5>
                    <p class="text-light mt-3 text-sm">{{ post.excerpt }}</p>
                </router-link>
                <div class="flex p flex-col justify-between text-xs">
                    <p class="text-black leading-none mb-2">{{ post.author.name }}</p>
                    <p class="text-grey-dark">{{ $d(new Date(post.updated_at.date), 'short') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TweenMax from "gsap/TweenMax";
export default {

    props: {
        post: {
            type: Object,
            default: {}
        }
    },

    updated() {
        TweenMax.staggerFrom(
            '.p',
            .5, {
                left: -5,
                opacity: 0.5,
            }, 0.2)
    }
}

</script>
<style>
.p {
    position: relative;
}

</style>

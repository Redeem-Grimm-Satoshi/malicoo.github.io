<template>
    <div class="wrap">
        <div class="text-center py-4 lg:px-4">
            <div class="p-2 bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-primary uppercase px-2 py-1 text-xs text-contrast font-bold mr-3">New</span>
                <span class="font-semibold mr-2 text-left flex-auto">Site is still under constraction</span>
                !
            </div>
        </div>
        <router-view class="fade"></router-view>
        <foot-bar />
    </div>
</template>
<script>
import TweenMax from 'gsap/TweenMax';
import FootBar from '@/comp/FootBar';

export default {

    components: {
        FootBar
    },

    mounted() {
        TweenMax.from('.fade', 2, {
            opacity: 0,
            ease: Back.easeOut
        })
    }
}

</script>

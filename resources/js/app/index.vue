<template>
    <div class="wrap">
        <div class="pageloader bg-contrast justify-center items-center" :class="{ 'fixed flex': !loaded, 'hidden':loaded}">
            <div uk-spinner></div>
        </div>
        <router-view class="mt-8" v-if="loaded"></router-view>
        <foot-bar />
    </div>
</template>
<script>
import FootBar from '@/comp/FootBar';

export default {

    components: {
        FootBar
    },

    data() {
        return {
            loaded: false
        }
    },

    head: {
        title: {
            complement: 'Malico'
        }
    },

    mounted() {
        let self = this;
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                setTimeout(
                    function() {
                        self.loaded = true;
                    }, 1000);
            }
        }
    }
}

</script>
<style>
.pageloader {
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

</style>

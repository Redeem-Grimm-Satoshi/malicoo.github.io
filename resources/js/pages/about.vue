<template>
    <div class="home">
        <nav-bar />
        <div class="container">
            <div class="text-center text-white pb-8">
                <h1 class="font-sans font-thin"> {{ $t('about.title') }}</h1>
            </div>
        </div>
        <div class="container">
            <p class="py-3 leading-normal text-center">
                {{ $t('about.body') }}
            </p>
            <p class="py-2 mb-8 text-center">
                {{ $t('about.version')}}
            </p>
            <div class="py-3 flex justify-center">
                <router-link :to="{ name: 'timeline'}" class="border border-primary p-3 text-primary mr-2">
                    {{ $t('about.longer_version')}}
                </router-link>
                <a href="/resume" class="border border-primary p-3 text-primary">
                    {{ $t('about.resume') }}
                </a>
            </div>
        </div>
        <div class="container">
            <skills />
        </div>
    </div>
</template>
<script>
import skills from './comp/skills';

const theme = 'red';
export default {

    components: {
        skills
    },

    head: function() {
        return {
            title: {
                inner: this.$t('about.title')
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
<style>
.line-container .item-symbol {
    left: -1.5rem !important;
}

</style>

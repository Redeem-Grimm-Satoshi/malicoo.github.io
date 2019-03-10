<template>
    <div class="container">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
            <vue-instagram :token="key" :count="5" mediaType="image" class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                <template slot="feeds" slot-scope="props">
                    <li>
                        <img :src="props.feed.images.standard_resolution.url" alt="">
                        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                            <h3 class="uk-margin-remove" v-if="props.feed.caption">{{ props.feed.caption.text }}</h3>
                            <p class="uk-margin-remove">{{ props.feed.likes.count }} <span uk-icon="heart"></span></p>
                        </div>
                    </li>
                </template>
            </vue-instagram>
            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
    </div>
</template>
<script>
import VueInstagram from 'vue-instagram'

export default {
    name: 'moi',


    data() {
        return { key: window.malico.instaKey }
    },

    components: {
        VueInstagram
    }
}

</script>

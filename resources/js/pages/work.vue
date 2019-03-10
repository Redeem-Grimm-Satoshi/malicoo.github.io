<template>
    <div class="home">
        <nav-bar />
        <div class="container my-2">
            <div class="text-center text-white pb-8">
                <h1 class="font-sans font-thin">Works</h1>
                <h2 class="font-thin text-sm tracking-wide mt-2 mb-4">List of the things I've done</h2>
            </div>
        </div>
        <div class="container">
            <div class="flex flex-wrap">
                <div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                    <div v-for="work in works">
                        <a class="uk-inline" :href="work.image" :data-caption="work.caption">
                            <img :src="work.image" :alt="work.caption">
                            <div class="uk-overlay uk-light uk-position-bottom">
                                <p v-html="work.caption"></p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            works: []
        }

    },

    head: function() {
        return {
            title: {
                inner: this.$t('work.title')
            },
        }
    },

    mounted() {
        this.fetch();
    },


    methods: {
        fetch() {
            let self = this;
            axios
                .get('/works.json')
                .then(
                    (response) => (
                        self.works = JSON.parse(` ${response.data} `)
                    )
                )

        }
    }
}

</script>

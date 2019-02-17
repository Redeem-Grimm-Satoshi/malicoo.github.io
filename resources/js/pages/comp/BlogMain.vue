<template>
    <div class="container">
        <div class="flex flex-wrap" v-if="load">
            <post v-for="(post, key) in posts" :key="post.id" :post="post" class="w-full mt-2 mb-4" />
        </div>
        <div class="mt-8" v-if="load">
            <ul class="uk-pagination">
                <li>
                    <router-link :to="{ name: 'blog', query: {page: meta.current_page - 1}}" v-if="meta.current_page != 1"><span class="uk-margin-small-right" uk-pagination-previous></span> {{ $t('blog.new_post') }}</router-link>
                </li>
                <li class="uk-margin-auto-left" v-if="meta.current_page != meta.last_page">
                    <router-link :to="{ name: 'blog', query: {page: meta.current_page + 1}}">{{ $t('blog.old_post')}} <span class="uk-margin-small-left" uk-pagination-next></span></router-link>
                </li>
            </ul>
        </div>
        <div class="flex justify-center p-8" v-if="!load">
            <div uk-spinner></div>
        </div>
    </div>
</template>
<script>
import post from './post';

export default {


    data() {
        return {
            posts: [],
            load: false,
            links: {},
            meta: {}

        }
    },


    components: {
        post
    },

    watch: {
        '$route'(to, from) {
            this.fetch();
        }
    },


    methods: {
        fetch() {
            let self = this;
            self.load = false;

            let url = "/api/posts";

            let cat = self.$route.query.cat || null;
            let params = {};

            if (cat != null) {
                params = {
                    page: (self.$route.query.page) ? self.$route.query.page : 1,
                    cat: cat
                };
            } else {
                params = {
                    page: (self.$route.query.page) ? self.$route.query.page : 1
                };
            }

            axios
                .get(url, {
                    params
                })
                .then(
                    (response) => {
                        self.posts = response.data.data;
                        self.links = response.data.links;
                        self.meta = response.data.meta;
                        self.load = true;
                    }
                )
                .catch(response => (console.log(response.data)))
        }
    },


    mounted() {
        this.fetch();

    }
}

</script>

<template>
    <div>
        <div class="flex justify-center flex-wrap">
            <div class="w-4/5 mb-8" v-if="load">
                <div class="uk-inline mb-4">
                    <img :src="post.featured_image" :alt="post.featured_image_caption">
                    <div class="uk-overlay uk-light uk-position-bottom">
                        <p v-html="post.featured_image_caption"></p>
                    </div>
                </div>
                <div class="flex justify-center mb-3">
                    <h1>{{ post.title }}</h1>
                </div>
                <div class="flex justify-center mb-8 font-thin text-sm">
                    <span class="mr-2"> {{ $d(new Date(post.updated_at), 'short') }} </span>
                    <span v-if="post.tags" class="mr-1" v-for="tag in post.tags">|
                        <router-link :to="{ name: 'blog', query: { cat: tag.slug}}" class="mx-1"> {{ tag.name }}
                        </router-link>
                    </span>
                    |
                    <span class="mx-2"> by {{ post.author.name }} </span>
                </div>
                <div class="mb-8 flex justify-center items-center">
                    <span class="mr-3 text-thin">Share : </span>
                    <social-sharing :title="post.title" :description="post.excerpt" :twitter-user="'MalicoKlash'" :url="'https://malico.tk/blog/' + post.slug" inline-template>
                        <div>
                            <network network="facebook" class="mx-1 cursor-pointer">
                                <span uk-icon="icon: facebook"></span>
                            </network>
                            <network class="mx-1 cursor-pointer" network="linkedin">
                                <span uk-icon="icon: linkedin"></span>
                            </network>
                            <network class="mx-1 cursor-pointer" network="twitter">
                                <span uk-icon="icon: twitter"></span>
                            </network>
                            <network class="mx-1 cursor-pointer" network="reddit">
                                <span uk-icon="icon: reddit"></span>
                            </network>
                        </div>
                    </social-sharing>
                </div>
            </div>
            <sidebar uk-parallax="opacity: 0,1; viewport: 0.1" />
            <div :class="'w-2/3'" id="target">
                <div v-html="post.body" class="wysiwyg"></div>
            </div>
        </div>
    </div>
</template>
<script>
import sidebar from './sidebar';
export default {

    props: {
        slug: {
            type: String,
            default: null
        }
    },

    head: function() {
        return {
            title: function() {
                inner: this.post.title
            }
        }
    },

    components: {
        sidebar
    },

    mounted() {
        this.fetch();
        this.events();
    },

    data() {
        return {
            post: {},
            load: false,
            show: false
        }
    },

    methods: {
        scrollY() {
            return window.pageYOffset || document.scrollTop;
        },
        events() {
            let self = this;
            window.addEventListener('scroll', self.scrollPage);
        },

        scrollPage() {
            let scrollVal = this.scrollY();
            if (scrollVal <= (window.innerHeight / 2)) {
                this.show = false;
            } else {
                this.show = true;
            }
        },

        fetch() {
            let self = this;
            axios
                .get('/api/post/' + self.slug)
                .then(
                    (response) => {
                        self.post = response.data[0];
                        self.load = true;
                        document.title = self.post.title;
                    });


        }
    }
}

</script>

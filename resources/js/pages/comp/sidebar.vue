<template>
    <div class="sidebar fixed">
        <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" class="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
            <li class="text-primary mb-2">Categories</li>
            <li class="uk-nav-divider"></li>
            <li class="" v-for="category in categories">
                <router-link :to="{ name: 'blog', query: { cat: category.slug }}">{{ category.name }}
                </router-link>
            </li>
            <li>
                <div class="bg-contrast border hover:border-solid border-dashed border-very-light flex justify-center flex-col p-4 py-6">
                    <p class="my-5 text-thin">
                        Love what you see and the way I write
                    </p>
                    <a href="/hire" class="button mt-3 p-4 text-center bg-primary text-contrast">
                        Hire Me
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>
<style>
.sidebar {
    opacity: 0;
    right: 5vw;
    top: 150px;
    width: 150px;
}

</style>
<script>
export default {

    name: 'sidebar',

    data() {
        return {
            categories: []
        }
    },

    mounted() {
        this.fetch();
    },

    methods: {
        fetch() {
            let self = this;
            axios
                .get('/api/categories')
                .then(
                    (response) => {
                        self.categories = response.data;
                    })
                .catch((response) => {
                    alert('error');
                })

        }
    }
}

</script>

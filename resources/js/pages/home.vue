<template>
    <div class="home">
        <nav-bar />
        <moi />
    </div>
</template>
<script>
import moi from './comp/moi';


export default {

    components: {

        moi
    },

    head: function() {
        return {
            title: {
                inner: this.$t('home.title')
            }
        }
    }

}

</script>

<template>
    <div class="home">
        <nav-bar />
        <moi />
    </div>
</template>
<script>
import projects from './comp/projects';
import moi from './comp/moi';


export default {

    components: {
        projects,
        moi
    },

    head: function (){
return {
title: {
inner: this.$t('home.title')
},
}
}

}

</script>
<style type="text/css">
.slide {
    filter: blur(5);
}

</style>

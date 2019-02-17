<template>
    <div class="text-2xl container py-32">
        <div class="flex flex-col">
            <div class="mb-3 bold">Hello</div>
            <div class="mb-3">My name is <span class="text-4xl bolder"> NDIFON 'Malico' DESMOND Y, </span></div>
            <div class="mb-3">a Nerd, living in <span class="bolder text-3xl"> Bamenda, Cameroon </span></div>
            <div class="mb-3"> I work for Mecitech, Eshiah & freelance under the Brand Desgn</div>
            <div class="mb-3">I just love Music, Coding and then more Music </div>
        </div>
        <div class="h"></div>
    </div>
</template>
<script>
import TweenMax from 'gsap/TweenMax';
export default {


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

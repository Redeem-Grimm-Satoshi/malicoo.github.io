<template>
    <div>
        <div class="container mt-8">
            <div class="text-center text-white pb-8">
                <h1 class="font-sans font-thin"> {{ $t('about.skills.title') }}</h1>
            </div>
        </div>
        <div class="relative ">
            <div v-for="skill in skills" class="skill text-center absolute w-32">
                <div><span> {{ skill.title }}</span></div>
                <span class="text-xs font-thin" v-for="subskill in skill.framework">
                    {{ subskill }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import TweenMax from 'gsap/TweenMax';


export default {

    data() {
        return {
            skills: [

                {
                    title: "C"
                },
                {
                    title: "HTML5/CSS3",
                    framework: ["Bulma", "TailWind CSS", "Bootstrap", "Foundation", "Material"]
                }
            ]
        }
    },

    mounted() {
        this.animate();
    },


    methods: {
        animate() {
            TweenMax.to(".skill", 0.5, { rotation: rand(32, 100) })
        }
    }
}

</script>

<template>
    <div class="hamburguer header-top__hamburguer">
        <div class="hamburguer__wrapper">
            <span class="hamburguer__line"></span>
            <span class="hamburguer__line"></span>
            <span class="hamburguer__line"></span>
        </div>
    </div>
</template>
<script>
import TweenMax from 'gsap/TweenMax';

export default {

    name: 'hamburguer',

    mounted() {
        TweenMax.staggerFrom(
            '.hamburguer__line',
            0.8, {
                left: -20,
            }, 0.2)
    }

}

</script>
<style>
.header-top__hamburguer {
    position: relative;

}

.hamburguer {
    width: 44px;
    height: 44px;
    cursor: pointer
}

.hamburguer__wrapper {
    width: 30px;
    position: relative;
    left: 50%;
    top: 12px;
    margin-left: -15px;
    transition: .5s ease-in-out
}

.hamburguer__line,
.hamburguer__wrapper {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.hamburguer__line {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: #ae4967;
    border-radius: 50px;
    opacity: 1;
    left: 0;
    transition: .25s ease-in-out
}

.hamburguer__line:first-child {
    top: 0
}

.hamburguer__line:nth-child(2) {
    top: 8px;
    width: 60%
}

.hamburguer__line:nth-child(3) {
    top: 16px;
    width: 80%
}

.hamburguer--open .hamburguer__line:first-child {
    top: 8px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg)
}

.hamburguer--open .hamburguer__line:nth-child(2) {
    opacity: 0;
    position: fixed;
    left: 700px;
    width: 100%
}

.hamburguer--open .hamburguer__line:nth-child(3) {
    top: 8px;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    width: 100%
}

</style>

<script setup>
import Carousel from './Carousel.vue';
import Slide from './Slide.vue';

const carouselSlides = ['https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg',
    'https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg',
    'https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg',
    'https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg'
]


</script>

<template>
    <Carousel class="carousel" v-slot="{ currentSlide }">
        howdy home here
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-info">
                <img :src="slide">
            </div>
        </Slide>
    </Carousel>
</template>

<style lang="css" scoped>
.carousel {
    position: relative;
    max-height: 100vh;
    height: 100vh;

    .slide-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
        height: 100%;

        img {
            min-width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
<script setup>
import { ref, onMounted } from 'vue'

const currentSlide = ref(1)
const getSlideCount = ref(null)

// next slide
const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        // loop back around
        currentSlide.value = 1
        return
    }
    currentSlide.value += 1
}

//prev slide
const prevSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value
        return
    }
    currentSlide.value -= 1
}

onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length
})

</script>

<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide"></slot>
        <div class="navigate">
            <div class="toggle-page left" @click="prevSlide">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="48px" viewBox="0 -960 960 960" width="48px"
                    fill="#000000">
                    <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
            </div>
            <div class="toggle-page right" @click="nextSlide">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="48px" viewBox="0 -960 960 960" width="48px"
                    fill="#000000">
                    <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.toggle-page {
    display: flex;
    flex: 1;

}

.right {
    justify-content: flex-end;
}

.icon {
    background-color: aliceblue;
    border-radius: 20px;
}
</style>
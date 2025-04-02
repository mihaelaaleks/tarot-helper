<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import CardCarousel from './CardCarousel.vue'

const API_URL = 'https://tarotapi.dev/api/v1/cards/'
const cards = Array(22)

const allCards = ref([])
const majorArcana = ref([])
const minorArcana = ref([])

onMounted(async () => {
    await fetchCards()
})

async function fetchCards() {
    try {
        // check if we have cached data
        const cached = localStorage.getItem('tarotCards')

        if (cached) {
            const data = JSON.parse(cached)
            allCards.value = data['cards']
            let endIndex = 22
            majorArcana.value = allCards.value.slice(0, endIndex).map(card => {
                // bit of an edge case for the fool here
                // the id says zero and the card is second last instead of first
                // TODO reassign 0 index to put it to the top of the pile
                if (card.id === 'ZERO') {
                    card.id = 0
                }
                return {
                    name: card.name,
                    type: card.type,
                    id: card.value,
                    image: `https://sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg`,
                    upright: card.meaning_up,
                    reversed: card.meaning_reversed,
                    description: card.desc

                }
            })
            minorArcana.value = allCards.value.slice(endIndex + 1,).map(card => {
                return {
                    name: card.name,
                    type: card.type,
                    suit: card.suit,
                    id: card.value,
                    upright: card.meaning_up,
                    reversed: card.meaning_reversed,
                    description: card.desc
                }
            })
            return
        }

        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        allCards.value = data['cards']


        // cache the data
        localStorage.setItem('tarotCards', JSON.stringify(data))
    } catch (error) {
        console.error(`Error fetching cards: ${error}`)
    }
}

function getCardByName(index) {
    return allCards.value.find(card => card.index === index)
}

</script>
<template>
    <div class="card-list">
        <CardCarousel :cards="majorArcana" />
        <div v-for="card in majorArcana" :key="card.index || card['name']" class="card-item" @click="selectCard(card)">
        </div>
    </div>
</template>
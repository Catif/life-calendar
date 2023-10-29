<script setup>
// ==============
//    Imports
// ==============
import { ref } from 'vue'


// ==============
//   Components
// ==============
import SeasonCard from './SeasonCard.vue'



// ==============
//     Store
// ==============



// ==============
//   Variables
// ==============
const seasons = ref([
  {
    id: 'winter',
    name: 'Winter',
    picture: 'winter.png',

  },
  {
    id: 'spring',
    name: 'Spring',
    picture: 'spring.png',
  },
  {
    id: 'summer',
    name: 'Summer',
    picture: 'summer.png',
  },
  {
    id: 'autumn',
    name: 'Autumn',
    picture: 'autumn.png',
  },
])

// ==============
//   Functions
// ==============


// ==============
//     Logic
// ==============
</script>

<template>
  <div class="seasons">
    <template v-for="season in seasons" :key="season.id">
      <SeasonCard :season="season" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.seasons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
</style>

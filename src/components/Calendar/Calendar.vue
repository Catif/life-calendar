<script setup>
// ==============
//    Imports
// ==============
import { computed } from 'vue'



// ==============
//   Components
// ==============
import Year from '../../components/Calendar/Year.vue'



// ==============
//     Store
// ==============



// ==============
//   Variables
// ==============
const years = computed(() => {
  const years = []
  const currentYear = new Date().getFullYear()

  for (let i = currentYear; i >= 2002; i--)
    years.push(i)

  return years
})


// ==============
//   Functions
// ==============



// ==============
//     Logic
// ==============
</script>

<template>
  <div class="years">
    <template v-for="year in years" :key="year">
      <Year :year-number="year" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.years {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>

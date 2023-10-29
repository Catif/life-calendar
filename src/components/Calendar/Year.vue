<script setup>
// ==============
//    Imports
// ==============



// ==============
//   Components
// ==============



// ==============
//     Store
// ==============



// ==============
//   Variables
// ==============
const props = defineProps({
  yearNumber: {
    type: Number,
    required: true,
  },
})


// ==============
//   Functions
// ==============



// ==============
//     Logic
// ==============
</script>

<template>
  <router-link :to="{ name: 'calendar.year', params: { year: yearNumber } }" class="year">
    {{ yearNumber }}
  </router-link>
</template>

<style lang="scss" scoped>
.year {
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
  width: 200px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.025);
  border-radius: 0.25rem;
  text-align: center;

  &:visited {
    color: inherit;
  }
  &:hover {
    cursor: pointer;
    color: inherit;

  }
}
</style>

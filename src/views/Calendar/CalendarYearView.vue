<script setup>
// ==============
//    Imports
// ==============
import { useRoute } from 'vue-router'



// ==============
//   Components
// ==============
import ListSeasons from '../../components/Calendar/Season/ListSeasons.vue'



// ==============
//     Store
// ==============



// ==============
//   Variables
// ==============
const route = useRoute()
const year = route.params.year ?? 'none'


// ==============
//   Functions
// ==============



// ==============
//     Logic
// ==============
</script>

<template>
  <section>
    <h1>
      Year : {{ year }}
    </h1>

    <ListSeasons />
  </section>
</template>

<style lang="scss" scoped>

</style>

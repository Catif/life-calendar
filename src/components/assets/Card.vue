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



// ==============
//   Functions
// ==============



// ==============
//     Logic
// ==============
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  background-color: hsla(0, 0%, 0%, 0.3);
  box-shadow: 0px 0px 10px 0px hsla(0, 0%, 0%, 1);
}
</style>

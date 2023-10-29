<script setup>
import { ref } from 'vue'
import Card from '../../assets/Card.vue'
import LabelInput from '../../assets/form/LabelInput.vue'

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
  season: {
    type: Object,
    required: true,
  },
})

const sectionsFields = ref([
  {
    id: 'general',
    label: 'General',
    fields: [
      {
        id: 'title',
        label: 'Title',
        type: 'text',
        placeholder: 'How do you call this season ?',
        value: '',
      },
      {
        id: 'description',
        label: 'Description',
        type: 'text', // change to textarea in future
        placeholder: 'Describe this season',
        value: '',
      },
    ],
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
  <Card :id="props.season.id" class="season">
    <template v-if="props.season.picture">
      <img
        :src="`/img/seasons/${props.season.picture}`"
        class="season__title"
      >
    </template>
    <template v-else>
      <div class="season__title">
        {{ props.season.name ?? 'Erreur' }}
      </div>
    </template>

    <template v-for="section in sectionsFields" :key="section.id">
      <div class="season__section">
        <div class="season__section__title">
          {{ section.label }}
        </div>

        <div class="season__section__fields">
        </div>
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.season {
  width: 800px;

  $seasons: (
    winter: #0b488e,
    spring: #0b8e2c,
    summer: #ffd61f,
    autumn: #8e460b
  );

  @each $season, $color in $seasons {
    &##{$season} {
      background-color: transparentize($color: $color, $amount: 0.8)
    }
  }


  &__title {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    font-size: 1.75rem;
  }

  &__section {
    padding: 1.25rem;

    &__title {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    &__fields {
      display: flex;
      flex-direction: column;
      gap: 20px
    }
  }
}
</style>

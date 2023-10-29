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
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  class: {
    type: String,
    required: false,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    required: false,
    default: '',
  },
})
const emmit = defineEmits(['update:modelValue'])

// ==============
//   Functions
// ==============



// ==============
//     Logic
// ==============
</script>

<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :class="props.class"
    :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<style lang="scss" scoped>
input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
}
</style>

<script setup>
// ==============
//    Imports
// ==============
import { ref, watch } from 'vue'
import Input from '../../assets/form/Input.vue'



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
  // General
  id: {
    type: String,
    required: true,
  },

  // Label
  label: {
    type: String,
    required: false,
    default: '',
  },
  classLabel: {
    type: String,
    required: false,
    default: '',
  },

  // Input
  classInput: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
})
const emmit = defineEmits(['update:modelValue'])
const modelTemp = ref(props.modelValue)

// ==============
//   Functions
// ==============



// ==============
//     Logic
// ==============
watch(
  () => props.modelValue,
  (newValue) => {
    modelTemp.value = newValue
  },
)
watch(
  () => modelTemp.value,
  (newValue) => {
    emmit('update:modelValue', newValue)
  },
)
</script>

<template>
  <label :for="props.id">
    <span :class="props.classLabel">
      {{ label }}
    </span>
    <Input
      :id="props.id"
      v-model="modelTemp"
      type="text"
      :placeholder="props.placeholder"
      :class="props.classInput"
      :default-value="props.defaultValue"
    />
  </label>
</template>

<style lang="scss" scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>

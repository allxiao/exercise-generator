<script lang="ts">
import { defineComponent } from 'vue'

import SingleValue from '@/components/SingleValue.vue'

export default defineComponent({
  name: 'SingleQuestion',
  props: {
    leftValue: Number,
    operation: String,
    rightValue: Number,
    result: Number
  },
  components: {
    SingleValue
  }
})
</script>

<template>
  <div class="question col-3 d-flex">
    <SingleValue :value="leftValue"></SingleValue>
    <div>{{ operation }}</div>
    <SingleValue :value="rightValue"></SingleValue>
    <div>=</div>
    <SingleValue :value="result"></SingleValue>
  </div>
</template>

<style scoped>
.question {
  font-size: 30px;
  color: #333333;
}
</style>

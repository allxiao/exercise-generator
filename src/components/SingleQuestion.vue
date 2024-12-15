<script lang="ts">
import { defineComponent } from 'vue'

import SingleValue from '@/components/SingleValue.vue'

export default defineComponent({
  name: 'SingleQuestion',
  props: {
    leftValue: Number,
    rightValue: Number,
    operation: String,
    result: Number,
    randomQuestion: Boolean
  },
  computed: {
    blankField() {
      if (this.randomQuestion) {
        return ['lhs', 'rhs', 'result'][Math.floor(Math.random() * 3)]
      } else {
        return 'result'
      }
    }
  },
  components: {
    SingleValue
  }
})
</script>

<template>
  <div class="question col-3 d-flex">
    <SingleValue :value="blankField === 'lhs' ? undefined : leftValue"></SingleValue>
    <div>{{ operation }}</div>
    <SingleValue :value="blankField === 'rhs' ? undefined : rightValue"></SingleValue>
    <div>=</div>
    <SingleValue :value="blankField === 'result' ? undefined : result"></SingleValue>
  </div>
</template>

<style scoped>
.question {
  font-size: 26px;
  color: #333333;
}
</style>

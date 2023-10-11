<script lang="ts">
import { defineComponent } from 'vue'

import SingleQuestion from '@/components/SingleQuestion.vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'ExerciseGrid',
  props: {
    title: String,
    pairs: {
      type: Array
    }
  },
  computed: {
    ...mapState([
      'min',
      'max',
      'resultMin',
      'resultMax',
      'operation'
    ]),
    tuples(): Array<Array<number>> {
      const choices = this.$store.state.numberSeries
      return choices.filter(this._validPair)
    }
  },
  methods: {
    _validPair(pair: Array<number>): boolean {
      const result = this.operation.calculate(pair[0], pair[1])
      // divide by zero or other cases
      if (isNaN(result)) {
        return false
      }
      if (this.resultMax === undefined) {
        return result >= this.resultMin
      }
      return result >= this.resultMin && result <= this.resultMax
    }
  },
  components: {
    SingleQuestion
  }
})
</script>

<template>
  <div class="container" v-if="tuples.length > 0">
    <div class="row questions-row" v-for="(ignore, r) in 12" :key="r">
      <SingleQuestion v-for="(ignore, i) in 4" :key="i" :left-value="tuples[(r * 4 + i) % tuples.length][0]"
                      :right-value="tuples[(r * 4 + i) % tuples.length][1]"
                      :operation="operation.symbol"></SingleQuestion>
    </div>
  </div>
</template>

<style scoped>

.questions-row {
  margin: 32px 0;
}
</style>

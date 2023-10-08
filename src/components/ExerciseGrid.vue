<script lang="ts">
import { defineComponent } from 'vue'

import SingleQuestion from '@/components/SingleQuestion.vue'
import { mapState } from 'vuex'
import { Operations } from '@/utils'

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
      'operation'
    ]),
    opSymbol (): string {
      switch (this.operation) {
        case Operations.Plus:
          return '＋'
        case Operations.Minus:
          return '－'
        case Operations.Multiply:
          return '×'
        case Operations.Divide:
          return '÷'
        default:
          return ''
      }
    },
    tuples (): Array<Array<number>> {
      const choices = this.$store.state.numberSeries
      return choices.filter(this.validPair)
    }
  },
  methods: {
    validPair (pair: Array<number>): boolean {
      let value: number
      switch (this.operation) {
        case Operations.Plus:
          return this.inScope(pair[0] + pair[1])
        case Operations.Minus:
          return this.inScope(pair[0] - pair[1])
        case Operations.Multiply:
          return this.inScope(pair[0] * pair[1])
        case Operations.Divide:
          if (pair[1] === 0) {
            return false
          }
          value = pair[0] / pair[1]
          return Math.floor(value) === value && this.inScope(value)
        default:
          return false
      }
    },
    inScope (value: number): boolean {
      return value >= this.min && value <= this.max
    }
  },
  components: {
    SingleQuestion
  }
})
</script>

<template>
  <div class="container" v-if="tuples.length > 0">
    <div class="row questions-row" v-for="r in 12" :key="r">
      <SingleQuestion v-for="i in 4" :key="i" :left-value="tuples[(r * 4 + i) % tuples.length][0]"
                      :right-value="tuples[(r * 4 + i) % tuples.length][1]" :operation="opSymbol"></SingleQuestion>
    </div>
  </div>
</template>

<style scoped>

.questions-row {
  margin: 32px 0;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

import SingleQuestion from '@/components/SingleQuestion.vue'
import { Question } from '@/store'
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
    ...mapState(['randomQuestion']),
    questionTable(): Array<Array<Question>> {
      const table: Array<Array<Question>> = []
      const candidates = this.$store.state.numberSeries
      for (let i = 0; i < 14; i++) {
        const start = i * 4
        if (start < candidates.length) {
          const row = candidates.slice(start, Math.min(start + 4, candidates.length))
          table.push(row)
        }
      }
      return table
    }
  },
  components: {
    SingleQuestion
  }
})
</script>

<template>
  <div class="container" v-if="questionTable.length > 0">
    <div class="row questions-row" v-for="row in questionTable" :key="row">
      <SingleQuestion v-for="cell in row" :key="cell" :left-value="cell.lhs"
                      :right-value="cell.rhs"
                      :operation="cell.op.symbol"
                      :result="cell.result()"
                      :random-question="randomQuestion"></SingleQuestion>
    </div>
  </div>
</template>

<style scoped>

.questions-row {
  margin: 25px 0;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

import SingleQuestion from '@/components/SingleQuestion.vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'PlusExercise',
  props: {
    title: String,
    pairs: {
      type: Array
    }
  },
  computed: {
    ...mapState([
      'min',
      'max'
    ]),
    tuples (): Array<Array<number>> {
      const choices = this.$store.state.numberSeries
      return choices.filter((pair: Array<number>) => pair[0] + pair[1] >= this.min && pair[0] + pair[1] <= this.max)
    }
  },
  components: {
    SingleQuestion
  }
})
</script>

<template>
  <div class="container">
    <h2 class="text-center m-4">{{ title }}</h2>
    <div id="student-info" class="row mt-4 mb-4 ms-1 me-1">
      <div class="col-2">姓名：</div>
      <div class="col-6"></div>
      <div class="col-4 text-end">&emsp;&emsp;年&emsp;&emsp;月&emsp;&emsp;日</div>
    </div>
    <div class="container" v-if="tuples.length > 0">
      <div class="row questions-row" v-for="r in 12" :key="r">
        <SingleQuestion v-for="i in 4" :key="i" :left-value="tuples[(r * 4 + i) % tuples.length][0]"
                        :right-value="tuples[(r * 4 + i) % tuples.length][1]" operation="+"></SingleQuestion>
      </div>
    </div>
  </div>
</template>

<style scoped>
#student-info {
  border-bottom: 1px solid #e4803e;
}

.questions-row {
  margin: 32px 0;
}
</style>

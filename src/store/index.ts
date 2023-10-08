import { createStore } from 'vuex'
import { Operations } from '@/utils'
import { MAX, MIN, OPERATION, RESULT_MAX, RESULT_MIN } from '@/store/mutations'

export interface State {
  min: number,
  max: number,
  resultMin: number,
  resultMax: number,
  operation: Operations
}

export default createStore<State>({
  state () {
    return {
      min: 1,
      max: 20,
      resultMin: 1,
      resultMax: 20,
      operation: Operations.Plus
    }
  },
  mutations: {
    [MIN] (state, n: number) {
      if (state.min !== n) {
        state.min = n
      }
    },
    [MAX] (state, n: number) {
      if (state.max !== n) {
        state.max = n
      }
    },
    [RESULT_MIN] (state, n: number) {
      state.resultMin = n
    },
    [RESULT_MAX] (state, n: number) {
      state.resultMax = n
    },
    [OPERATION] (state, op: Operations) {
      state.operation = op
    }
  }
})

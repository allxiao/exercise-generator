import { createStore } from 'vuex'
import { Operations } from '@/utils'
import { MAX, MIN, OPERATION, RESULT_MAX, RESULT_MIN, SHUFFLE } from '@/store/mutations'

export interface State {
  min: number,
  max: number,
  resultMin: number,
  resultMax: number,
  operation: Operations,
  numberSeries: Array<Array<number>>
}

function permute (min: number, max: number): Array<Array<number>> {
  const permutations: Array<Array<number>> = []
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      if (i + j < min || i + j > max) {
        continue
      }
      permutations.push([i, j])
    }
  }

  return shuffle(permutations)
}

function shuffle<T> (choices: Array<T>): Array<T> {
  for (let i = 0; i < choices.length; i++) {
    const index = i + Math.floor(Math.random() * (choices.length - i))
    const temp = choices[i]
    choices[i] = choices[index]
    choices[index] = temp
  }
  return choices
}

export default createStore<State>({
  state () {
    return {
      min: 1,
      max: 20,
      resultMin: 1,
      resultMax: 20,
      operation: Operations.Plus,
      numberSeries: permute(1, 20)
    }
  },
  mutations: {
    [MIN] (state, n: number) {
      if (state.min !== n) {
        state.min = n
        state.numberSeries.splice(0, state.numberSeries.length, ...permute(state.min, state.max))
      }
    },
    [MAX] (state, n: number) {
      if (state.max !== n) {
        state.max = n
        state.numberSeries.splice(0, state.numberSeries.length, ...permute(state.min, state.max))
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
    },
    [SHUFFLE] (state) {
      state.numberSeries.splice(0, state.numberSeries.length, ...permute(state.min, state.max))
    }
  }
})

import { createStore } from 'vuex'
import { Operations } from '@/utils'
import { MAX, MIN, OPERATION, SHUFFLE } from '@/store/mutations'

export interface State {
  min: number,
  max: number,
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

function updateNumberSeries (state: State) {
  if (state.min !== undefined && state.max !== undefined) {
    state.numberSeries.splice(0, state.numberSeries.length, ...permute(state.min, state.max))
  } else {
    state.numberSeries.length = 0
  }
}

export default createStore<State>({
  state () {
    return {
      min: 1,
      max: 20,
      operation: Operations.Plus,
      numberSeries: permute(1, 20)
    }
  },
  getters: {
    operationName (state): string {
      return state.operation as string
    }
  },
  mutations: {
    [MIN] (state, n: number) {
      if (state.min !== n) {
        state.min = n
        updateNumberSeries(state)
      }
    },
    [MAX] (state, n: number) {
      if (state.max !== n) {
        state.max = n
        updateNumberSeries(state)
      }
    },
    [OPERATION] (state, op: Operations) {
      state.operation = op
    },
    [SHUFFLE] (state) {
      updateNumberSeries(state)
    }
  }
})
import { createStore } from 'vuex'
import * as mutations from '@/store/mutations'
import { fromOperationType, Operation, Operations, OperationType } from '@/store/operations'

export interface State {
  min: number,
  max: number,
  resultMin: number,
  resultMax: number | undefined,
  operation: Operation,
  numberSeries: Array<Array<number>>
}

function permute(min: number, max: number): Array<Array<number>> {
  const permutations: Array<Array<number>> = []
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      permutations.push([i, j])
    }
  }

  return shuffle(permutations)
}

function shuffle<T>(choices: Array<T>): Array<T> {
  for (let i = 0; i < choices.length; i++) {
    const index = i + Math.floor(Math.random() * (choices.length - i))
    const temp = choices[i]
    choices[i] = choices[index]
    choices[index] = temp
  }
  return choices
}

function updateNumberSeries(state: State) {
  if (state.min !== undefined && state.max !== undefined) {
    state.numberSeries.splice(0, state.numberSeries.length, ...permute(state.min, state.max))
  } else {
    state.numberSeries.length = 0
  }
}

export default createStore<State>({
  state() {
    return {
      min: 1,
      max: 20,
      resultMin: 0,
      resultMax: undefined,
      operation: Operations.Plus,
      numberSeries: permute(1, 20)
    }
  },
  getters: {
    operationName(state): string {
      return state.operation.representation
    }
  },
  mutations: {
    [mutations.MIN](state, n: number) {
      if (state.min !== n) {
        state.min = n
        updateNumberSeries(state)
      }
    },
    [mutations.MAX](state, n: number) {
      if (state.max !== n) {
        state.max = n
        updateNumberSeries(state)
      }
    },
    [mutations.RESULT_MIN](state, n: number) {
      if (n === undefined) {
        n = 0
      }
      if (state.resultMin !== n) {
        state.resultMin = n
      }
    },
    [mutations.RESULT_MAX](state, n: number) {
      if (state.resultMax !== n) {
        state.resultMax = n
      }
    },
    [mutations.OPERATION](state, op: OperationType | Operation) {
      if ((op as Operation).representation !== undefined) {
        state.operation = op as Operation
      } else {
        state.operation = fromOperationType(op as OperationType)
      }
    },
    [mutations.SHUFFLE](state) {
      updateNumberSeries(state)
    }
  }
})

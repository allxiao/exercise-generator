import { createStore } from 'vuex'
import * as mutations from '@/store/mutations'
import { Operation, Operations, OperationType } from '@/store/operations'

export class Question {
  readonly lhs: number
  readonly rhs: number
  readonly op: Operation

  constructor(lhs: number, rhs: number, op: Operation) {
    this.lhs = lhs
    this.rhs = rhs
    this.op = op
  }

  inScope(min: number, max: number, resultMin: number, resultMax: number): boolean {
    if (this.lhs < min || this.lhs > max) {
      return false
    }
    if (this.rhs < min || this.rhs > max) {
      return false
    }
    const result = this.op.calculate(this.lhs, this.rhs)
    if (isNaN(result) || !isFinite(result) || Math.floor(result) !== result) {
      return false
    }
    if (result < resultMin || result > resultMax) {
      return false
    }
    return true
  }
}

export interface State {
  min: number,
  max: number,
  resultMin: number,
  resultMax: number,
  operation: OperationType,
  numberSeries: Array<Question>
}

function permute(min: number, max: number, type: OperationType, resultMin: number, resultMax: number): Array<Question> {
  const permutations: Array<Question> = []
  const op = Operations[type]
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      // eslint-disable-next-line new-cap
      const question = new Question(i, j, new op())
      if (question.inScope(min, max, resultMin, resultMax)) {
        permutations.push(question)
      }
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
    const permuted = permute(state.min, state.max, state.operation, state.resultMin, state.resultMax)
    console.log(permuted)
    state.numberSeries.splice(0, state.numberSeries.length, ...permuted)
  } else {
    state.numberSeries.length = 0
  }
}

export default createStore<State>({
  state() {
    const data: State = {
      min: 1,
      max: 20,
      resultMin: 0,
      resultMax: 100,
      operation: OperationType.Plus,
      numberSeries: []
    }
    data.numberSeries = permute(data.min, data.max, data.operation, data.resultMin, data.resultMax)
    return data
  },
  getters: {
    operationName(state): string {
      return state.operation
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
        updateNumberSeries(state)
      }
    },
    [mutations.RESULT_MAX](state, n: number) {
      if (n === undefined) {
        n = 100
      }
      if (state.resultMax !== n) {
        state.resultMax = n
        updateNumberSeries(state)
      }
    },
    [mutations.OPERATION](state, op: OperationType) {
      if (state.operation !== op) {
        state.operation = op
        updateNumberSeries(state)
      }
    },
    [mutations.SHUFFLE](state) {
      updateNumberSeries(state)
    }
  }
})

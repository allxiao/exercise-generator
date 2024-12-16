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

  result(): number {
    return this.op.calculate(this.lhs, this.rhs)
  }

  toString(): string {
    return `${this.lhs} ${this.op.symbol} ${this.rhs} = ${this.result()}`
  }
}

export interface State {
  min: number,
  max: number,
  resultMin: number,
  resultMax: number,
  operation: OperationType,
  numberSeries: Array<Question>,
  randomQuestion: boolean
}

export function toStoredData(state: State): State {
  return {
    min: state.min,
    max: state.max,
    resultMin: state.resultMin,
    resultMax: state.resultMax,
    operation: state.operation,
    numberSeries: [],
    randomQuestion: state.randomQuestion
  }
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
      numberSeries: [],
      randomQuestion: false
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
    [mutations.INITIALIZE](state) {
      if (localStorage.getItem('store')) {
        const stored = JSON.parse(localStorage.getItem('store') || '{}')
        this.replaceState(Object.assign(state, stored))
        updateNumberSeries(state)
      }
    },
    [mutations.MIN](state, n: number) {
      state.min = n
    },
    [mutations.MAX](state, n: number) {
      state.max = n
    },
    [mutations.RESULT_MIN](state, n: number) {
      if (n === undefined) {
        n = 0
      }
      state.resultMin = n
    },
    [mutations.RESULT_MAX](state, n: number) {
      if (n === undefined) {
        n = 100
      }
      state.resultMax = n
    },
    [mutations.OPERATION](state, op: OperationType) {
      state.operation = op
    },
    [mutations.SHUFFLE](state, mutation: string) {
      updateNumberSeries(state)
    },
    [mutations.RANDOM_QUESTION](state, random: boolean) {
      state.randomQuestion = random
    }
  }
})

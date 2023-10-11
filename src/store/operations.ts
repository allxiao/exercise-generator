export enum OperationType {
  Plus = 1,
  Minus,
  Multiply,
  Divide
}

export interface Operation {
  readonly type: OperationType
  readonly symbol: string
  readonly representation: string

  calculate(lhs: number, rhs: number): number
}

export const ALL_OPERATIONS: Operation[] = []
const __mapping: { [key in OperationType]?: Operation } = {}
export function fromOperationType(type: OperationType): Operation {
  return __mapping[type] ?? Plus
}

function __defineOperation(op: Operation): Operation {
  ALL_OPERATIONS.push(op)
  __mapping[op.type] = op
  return op
}

const Plus: Operation = __defineOperation({
  type: OperationType.Plus,
  symbol: '＋',
  representation: '加法',
  calculate(lhs: number, rhs: number): number {
    return lhs + rhs
  }
})

const Minus: Operation = __defineOperation({
  type: OperationType.Minus,
  symbol: '－',
  representation: '减法',
  calculate(lhs: number, rhs: number): number {
    return lhs - rhs
  }
})

const Multiply: Operation = __defineOperation({
  type: OperationType.Multiply,
  symbol: '×',
  representation: '乘法',
  calculate(lhs: number, rhs: number): number {
    return lhs * rhs
  }
})

const Divide: Operation = __defineOperation({
  type: OperationType.Divide,
  symbol: '÷',
  representation: '除法',
  calculate(lhs: number, rhs: number): number {
    const result = lhs / rhs
    if (!isFinite(result) || isNaN(result) || Math.floor(result) !== result) {
      return NaN
    }
    return result
  }
})

export const Operations = {
  Plus,
  Minus,
  Multiply,
  Divide
}

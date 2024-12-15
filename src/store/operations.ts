export enum OperationType {
  Plus = '加法',
  Minus = '减法',
  Multiply = '乘法',
  Divide = '除法',
  Mixed = '混合',
}

export class MathOperation {
  readonly type: OperationType
  readonly symbol: string

  constructor(type: OperationType, symbol: string) {
    this.type = type
    this.symbol = symbol
  }
}

export interface Operation {
  readonly type: OperationType
  readonly symbol: string

  calculate(lhs: number, rhs: number): number
}

export const ALL_OPERATIONS: OperationType[] = [OperationType.Plus, OperationType.Minus, OperationType.Multiply, OperationType.Divide, OperationType.Mixed]

export class PlusOperation extends MathOperation implements Operation {
  constructor() {
    super(OperationType.Plus, '+')
  }

  calculate(lhs: number, rhs: number): number {
    return lhs + rhs
  }
}

export class MinusOperation extends MathOperation implements Operation {
  constructor() {
    super(OperationType.Minus, '-')
  }

  calculate(lhs: number, rhs: number): number {
    return lhs - rhs
  }
}

export class MultiplyOperation extends MathOperation implements Operation {
  constructor() {
    super(OperationType.Multiply, '×')
  }

  calculate(lhs: number, rhs: number): number {
    return lhs * rhs
  }
}

export class DivideOperation extends MathOperation implements Operation {
  constructor() {
    super(OperationType.Divide, '÷')
  }

  calculate(lhs: number, rhs: number): number {
    const result = lhs / rhs
    if (!isFinite(result) || isNaN(result) || Math.floor(result) !== result) {
      return NaN
    }
    return result
  }
}

export class MixedOperation extends MathOperation implements Operation {
  readonly delegate: Operation

  constructor() {
    const d = new ([PlusOperation, MinusOperation][Math.floor(Math.random() * 2)])()
    super(OperationType.Mixed, d.symbol)
    this.delegate = d
  }

  calculate(lhs: number, rhs: number): number {
    return this.delegate.calculate(lhs, rhs)
  }
}

export const Operations: { [key:string]: { new(): Operation } } = {
  [OperationType.Plus]: PlusOperation,
  [OperationType.Minus]: MinusOperation,
  [OperationType.Multiply]: MultiplyOperation,
  [OperationType.Divide]: DivideOperation,
  [OperationType.Mixed]: MixedOperation
}

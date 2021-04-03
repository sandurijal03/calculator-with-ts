import Calc, { CalcInput, InputType, OperatorType, Operation } from './calc'

test('generates operations', () => {
  const inputs: Array<CalcInput> = [
    {
      type: InputType.Numerical, value: 1
    },
    {
      type: InputType.Numerical, value: 2
    }, {
      type: InputType.Operator, operator: OperatorType.Add
    }, {
      type: InputType.Numerical, value: 3
    }, {
      type: InputType.Operator, operator: OperatorType.Equals
    },
  ]

  const operations: Array<Operation> = [
    { operator: OperatorType.Add, value: 12 },
    { operator: OperatorType.Add, value: 3 },
    { operator: OperatorType.Equals, value: 0 },
  ]
  expect(Calc.getOperationsBuilder(inputs).operations).toEqual(operations)
})

test("has display value of 0 with no input", () => {
  const inputs: Array<CalcInput> = [];
  const state = Calc.getState(inputs)
  expect(state.displayValue).toEqual(0)
})

test("derives display value upon first numrical input", () => {
  const inputs: Array<CalcInput> = [{
    type: InputType.Numerical,
    value: 1
  }]
  const state = Calc.getState(inputs)
  expect(state.displayValue).toEqual(1)
})

test("derives display value upon operator input", () => {
  const inputs: Array<CalcInput> = [{
    type: InputType.Numerical,
    value: 1
  }, {
    type: InputType.Numerical, value: 2
  }, {
    type: InputType.Operator, operator: OperatorType.Add
  }]
  const state = Calc.getState(inputs)
  expect(state.displayValue).toEqual(12)
})



test("derive display value upon new numerical input", () => {
  const inputs: Array<CalcInput> = [
    {
      type: InputType.Numerical, value: 1
    },
    {
      type: InputType.Numerical, value: 2
    }, {
      type: InputType.Operator, operator: OperatorType.Add
    }, {
      type: InputType.Numerical, value: 3
    }
  ];

  const state = Calc.getState(inputs)
  expect(state.displayValue).toEqual(3)
})


test("derive final state with addititon", () => {
  const inputs: Array<CalcInput> = [
    {
      type: InputType.Numerical, value: 1
    },
    {
      type: InputType.Numerical, value: 2
    }, {
      type: InputType.Operator, operator: OperatorType.Add
    }, {
      type: InputType.Numerical, value: 3
    }, {
      type: InputType.Operator, operator: OperatorType.Equals
    },
  ];
  const state = Calc.getState(inputs)
  expect(state.displayValue).toEqual(15)
})


test("derive final state (with addititon and subtraction)", () => {
  const inputs: Array<CalcInput> = [
    {
      type: InputType.Numerical, value: 1
    },
    {
      type: InputType.Numerical, value: 2
    }, {
      type: InputType.Operator, operator: OperatorType.Add
    }, {
      type: InputType.Numerical, value: 3
    }, {
      type: InputType.Operator, operator: OperatorType.Subtract
    },
    {
      type: InputType.Numerical, value: 5
    }, {
      type: InputType.Operator, operator: OperatorType.Equals
    },
  ];
  const state = Calc.getState(inputs)
  expect(state.displayValue).toEqual(10)
})

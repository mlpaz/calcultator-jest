const validations = require('../src/tools/validations');
const operations = require('../src/operations/operations');
const calculator = require('../src/calculator');

jest.mock(
  '../src/tools/validations',
  () => ({
    validNumber : jest.fn()
  })
);

jest.mock(
  'readline',
  () => ({
    createInterface : jest.fn(() => ({ question : jest.fn() })) ,
    
  })
);

jest.mock(
  '../src/operations/operations',
  () => ({
    validOperation : jest.fn(),
    resolveOperation: jest.fn(() => result )
  })
);

const result = 5

describe('Calculator ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // Given
  const equation = '0 + 5 / 1';
  it(`Given a equation ${equation} , when try to resolve, then check calls and return value`, () => {
    // When
    const result = calculator.resolve(equation);
    // Then
    expect(result).toBe(result);
    expect(validations.validNumber).toHaveBeenCalledTimes(3);
    expect(operations.validOperation).toHaveBeenCalledTimes(2);
    expect(operations.resolveOperation).toHaveBeenCalledTimes(2);
    expect(operations.resolveOperation).toHaveBeenNthCalledWith(1, 0, '+', 5);
    expect(operations.resolveOperation).toHaveBeenNthCalledWith(2, 5, '/', 1);
  });

});

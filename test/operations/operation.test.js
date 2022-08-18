const operations = require('../../src/operations/operations');
const factory = require('../factory/operation.factory');
describe('Operations', () => {
  test('Given invalid operation, when try to valid, then check error', () => {
    // Given
    const invalidOperation = 'invalidOperation';
    // When
    const validNumberCall = () => {operations.validOperation(invalidOperation)}
    // Then
    expect(validNumberCall)
    .toThrowError(new Error(`Invalid operation, valid operation ${Object.keys(operations.operationMap)}`));
  });
  it.each(
    // Given
    Object.keys(operations.operationMap),
  )
  ('Given a %s operation, when try to valid, then check not throw error', (operation) => {
    // When and Then
    expect( () => {operations.validOperation(operation)} ).not.toThrow();
  });

  it.each(
    Object.keys(operations.operationMap),
  )
  ('Given a %s operation, when try to resolve operation, then check result', (operation) => {
    // Given 
    const expects = factory.operationExpectMap[operation];
    const x = expects.x;
    const y = expects.y;
    const expectValue = expects.expect;
    // When
    const res = operations.resolveOperation(x,operation,y);
    // Then
    expect(res).toBe(expectValue);
  });
});



const validations = require('../../src/tools/validations');
describe('Validations', () => {
  it("Given valid operation, when try to valid an operation, then not check error", () => {
    // Given
    const invalidNumber = 'invalidNumber';
    // When
    const validNumberCall = () => {validations.validNumber(invalidNumber)}
    // Then
    expect(validNumberCall)
    .toThrowError(new Error('Invalid number'));
  });

  it("Given a number, when try to valid a number, then check not throw error", () => {
    // Given
    const number = 5;
    // When and Then
    expect( () => {validations.validNumber(number)} ).not.toThrow();
  });
});

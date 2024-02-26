const DoEquation = require('./equation');

describe('DoEquation', () => {
    test('does 2 number multiplicacion', () => {
        expect(DoEquation('9 X 9')).toBe('81');
    })

    test('does 2 number addition', () => {
        expect(DoEquation('9 + 9')).toBe('18');
    })

    test('does 2 number substraction', () => {
        expect(DoEquation('9 - 9')).toBe('0');
    })

    test('does 2 number division', () => {
        expect(DoEquation('9 / 9')).toBe('1');
    })

    test('does multiple operations', () => {
        expect(DoEquation('6 X 6 X 6')).toBe('216');
    })

    test('does multiple operations', () => {
        expect(DoEquation('6 + 6 + 6')).toBe('18');
    })

    test('does multiple operations', () => {
        expect(DoEquation('3 + 3 X 6')).toBe('21');
    })
    
})
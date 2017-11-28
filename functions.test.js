const functions = require('./functions.js');

test('returnTwo returns the number 2', ()=>{
    let result = functions.returnTwo();

    expect(result).toBe(2);
})

test('expect greeting("James") to equal "Hello, James."', ()=>{
    let name = 'James';

    let result = functions.greeting(name);

    expect(result).toBe("Hello, James.")
})

test('expect greeting("Jill") to equal "Hello, Jill."', ()=>{
    let name = 'Jill';

    let result = functions.greeting(name);

    expect(result).toBe("Hello, Jill.")
})

test('add(1,2) === 3',()=>{
    let num1 = 1;
    let num2 = 2;

    let result = functions.add(num1, num2);

    expect(result).toBeCloseTo(3);
})

test('add(5,9) === 14',()=>{
    let num1 = 5;
    let num2 = 9;

    let result = functions.add(num1, num2);

    expect(result).toBeCloseTo(14);
})

describe('Math Functions', ()=>{
    test('multiply(5, 10) === 50', ()=>{
        let num1 = 5;
        let num2 = 10;

        let result = functions.multiply(num1, num2);

        expect(result).toBeCloseTo(50);
    })
    test('multiply(10, 15) === 150', ()=>{
        let num1 = 10;
        let num2 = 15;

        let result = functions.multiply(num1, num2);

        expect(result).toBeCloseTo(150);
    })
    test('divide(5, 10) === .5', ()=>{
        let num1 = 5;
        let num2 = 10;

        let result = functions.divide(num1, num2);

        expect(result).toBeCloseTo(.5);
    })
    test('divide(10, 5) === 2', ()=>{
        let num1 = 10;
        let num2 = 5;

        let result = functions.divide(num1, num2);

        expect(result).toBeCloseTo(2);
    })
    test('subtract(5, 10) === -5', ()=>{
        let num1 = 5;
        let num2 = 10;

        let result = functions.subtract(num1, num2);

        expect(result).toBeCloseTo(-5);
    })
    test('subtract(10, 5) === 5', ()=>{
        let num1 = 10;
        let num2 = 5;

        let result = functions.subtract(num1, num2);

        expect(result).toBeCloseTo(5);
    })
    test('dynamic subtract number', ()=>{
        expect(functions.subtract(2,1)).toBeCloseTo(1);
        expect(functions.subtract(100,50)).toBeCloseTo(50);
    })
})
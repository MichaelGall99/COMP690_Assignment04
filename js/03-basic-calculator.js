// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    let result

    switch (operation) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x *y;
            break;
        case 'divide':
            result = x / y;
            break;
    }

    return result
}

// COLLECT FIRST NUMBER FROM USER
function promptFirstNum() {
    let firstNumStr
    
    do {
        firstNumStr = prompt('Please enter your first number: ')

        if (isNaN(firstNumStr) || firstNumStr != parseInt(firstNumStr) || 
        firstNumStr.length != parseInt(firstNumStr).toString().length) {
            alert('You must enter a number to use the calculator')
        }
    } while (isNaN(firstNumStr) || firstNumStr != parseInt(firstNumStr) || firstNumStr.length != parseInt(firstNumStr).toString().length)
    return Number(firstNumStr)    
}

// COLLECT SECOND NUMBER FROM USER
function promptSecondNum() {
    let secondNumStr

    do {
        secondNumStr = prompt('Please enter your second number: ')

        if (isNaN(secondNumStr) || secondNumStr != parseInt(secondNumStr) || 
        secondNumStr.length != parseInt(secondNumStr).toString().length) {
            alert('You must enter a number to use the calculator')
        }
    } while (isNaN(secondNumStr) || secondNumStr != parseInt(secondNumStr) || secondNumStr.length != parseInt(secondNumStr).toString().length)
    return Number(secondNumStr)    
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
function promptOperation() {
    let operationStr

    do {
        operationStr = prompt('Please enter which operation you would like to perform [add, subtract, multiply, or divide]: ').toLowerCase()
    
        if (operationStr != 'add' && operationStr != 'subtract' && operationStr != 'multiply' && operationStr != 'divide') {
            alert('You must enter \'add\', \'subtract\', \'multiply\', or \'divide\' for the operation you would like to perform!')
        }
    } while (operationStr != 'add' && operationStr != 'subtract' && operationStr != 'multiply' && operationStr != 'divide')
    return operationStr    
}

// DISPLAY THE NAME OF THE APPLICATION TO THE USER
function displayAppTitle() {
    alert('Welcome To The Basic Calculator')
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
function useTheBasicCalculator() {
    let firstNum
    let secondNum
    let operationStr
    let result
    let tryAgain

    displayAppTitle()

    do {
        firstNum = promptFirstNum()
        secondNum = promptSecondNum()
        operationStr = promptOperation()

        result = calculate(firstNum, secondNum, operationStr)

        switch (operationStr) {
            case 'add':
                alert(`${firstNum} + ${secondNum} = ${result}`)
                break;
            case 'subtract':
                alert(`${firstNum} - ${secondNum} = ${result}`)
                break;
            case 'multiply':
                alert(`${firstNum} * ${secondNum} = ${result}`)
                break;
            case 'divide':
                alert(`${firstNum} / ${secondNum} = ${result}`)
                break;
        }

        do {
            tryAgain = prompt('Would you like to use The Basic Calculator again [y/n]: ')
        } while (tryAgain != 'y' && tryAgain != 'n')
        
    } while (tryAgain != 'n')

    alert ('Thank you for using The Basic Calculator')
}


// LAUNCH THE BASIC CALCULATOR
useTheBasicCalculator()



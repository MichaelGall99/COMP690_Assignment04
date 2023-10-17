//STEP 1: HALF A NUMBER
function halfNumber(num) {
	return num / 2
}

//STEP 2: SQUARE A NUMBER
function squareNumber(num) {
	return num * num
}

//STEP 3: CALCULATE THE PERCENTAGE OF TWO NUMBERS
function percentOf(firstNum, secondNum) {
	return (firstNum / secondNum) * 100
}

//STEP 4: CALCULATE THE MODULUS OF TWO NUMBERS
function findModulus(firstNum, secondNum) {
	return firstNum % secondNum
}


//STEP 5: SAMPLE CALCULATIONS AND THEIR OUTPUT
let numToHalf = 5
let numToSquare = 3
let num1PercentOf = 2
let num2PercentOf = 4
let num1Modulus = 10
let num2Modulus = 4

console.log(`Half of ${numToHalf} is ${halfNumber(numToHalf)}.`)   
console.log(`The result of squaring the number ${numToSquare} is ${squareNumber(numToSquare)}.`)
console.log(`${num1PercentOf} is ${percentOf(num1PercentOf, num2PercentOf)}% of ${num2PercentOf}.`)   
console.log(`${findModulus(num1Modulus, num2Modulus)} is the modulus of ${num2Modulus} and ${num1Modulus}.`)   

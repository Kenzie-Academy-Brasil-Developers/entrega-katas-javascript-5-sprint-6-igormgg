// FUNÇÃO 1
const reverseString = (string) => string.split('').reverse().join('')

const testeReverseString1 = () => {
    let result = reverseString("socorram me subi no onibus em marrocos");
    let expected = "socorram me subino on ibus em marrocos";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1()

const testeReverseString2 = () => {
    let result = reverseString('inverter essa frase')
    let expected = 'esarf asse retrevni'
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testeReverseString2()
//

// FUNÇÃO 2
const reverseSentence = (string) => string.split(' ').reverse().join(' ')

const testReverseSentence1 = () => {
    let result = reverseSentence('inverter essa frase')
    let expected = 'frase essa inverter'
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testReverseSentence1()

const testReverseSentence2 = () => {
    let result = reverseSentence('inverter de novo')
    let expected = 'novo de inverter'
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testReverseSentence2()
//

// FUNÇÃO 3
const minimumValue = (array) => Math.min(...array)

const testMinimumValue1 = () => {
    let result = minimumValue([7, 102, 81, 3, 65, 4, 40])
    let expected = 3
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testMinimumValue1()

const testMinimumValue2 = () => {
    let result = minimumValue([-2, 14, -105, 302, 5])
    let expected = -105
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testMinimumValue2()
//

// FUNÇÃO 4
const maximumValue = (array) => Math.max(...array)

const testmaximumValue1 = () => {
    let result = maximumValue([7, 102, 81, 3, 65, 4, 40])
    let expected = 102
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testMinimumValue1()

const testmaximumValue2 = () => {
    let result = maximumValue([-2, 14, -105, 302, 5])
    let expected = 302
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testmaximumValue2()
//

// FUNÇÃO 5
const calculateRemainder = (a, b) => a%b

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(5,2)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testCalculateRemainder1()

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(40, -7)
    let expected = 5
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testCalculateRemainder2()
//

// FUNÇÃO 6
const distinctValues = (numberList) => {
    let numberArr = numberList.split(' ')
    let output = []
    numberArr.forEach(element => {
      if(!output.includes(element)){
          output.push(element)
      }  
    })
    let result = output.join(' ')
    return result
}

const testDistinctValues1 = () => {
    let result = distinctValues('1 3 5 3 7 3 1 1 5')
    let expected = '1 3 5 7'
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testDistinctValues1()

const testDistinctValues2 = () => {
    let result = distinctValues('-3 5 9 -3 -7 5 -3')
    let expected = '-3 5 9 -7'
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testDistinctValues2()
//

// FUNÇÃO 7
const countValues = (numberList) => {
    let numberArr = numberList.split(' ').sort()
    let output = []
    let count = []
    let previousNumber = ''
    let result = ''

    for (let i = 0; i < numberArr.length; i++){
        if(numberArr[i] !== previousNumber){
            output.push(Number(numberArr[i]))
            count.push(1)
        }
        else {
            count[count.length-1] += 1
        }
        previousNumber = numberArr[i]
    }

    for(let i = 0; i < output.length; i++){
        if (i === 0){
            result += `${output[i]}(${count[i]})`    
        }
        else {
            result += ` ${output[i]}(${count[i]})`
        }
    }
    
    return result
}

const testCountValues1 = () => {
    let result = countValues('1 3 5 3 7 3 1 1 5')
    let expected = '1(3) 3(3) 5(2) 7(1)'
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testCountValues1()

const testCountValues2 = () => {
    let result = countValues('-3 5 9 -3 -7 5 -3')
    let expected = '-3(3) -7(1) 5(2) 9(1)'
    console.assert(result === expected, `esperado: ${expected}, obtido:${result}`)
}
testCountValues2()
//

// FUNÇÃO 8
const evaluateExpression = (str, obj) => {
    let strArr = str.split(' ')
    let result = 0
    for (let i = 0; i < strArr.length; i+=2){
        if (i === 0){
            result = obj[strArr[i]]
        }
        else {
            if (strArr[i-1] == '+'){
                result += obj[strArr[i]]
            }
            if (strArr[i-1] == '-'){
                result -= obj[strArr[i]]
            }
            if (strArr[i-1] == '*'){
                result *= obj[strArr[i]]
            }
            if (strArr[i-1] == '/'){
                result /= obj[strArr[i]]
            }
            if (strArr[i-1] == '**'){
                result **= obj[strArr[i]]
            }
        }
    }
    return result
}

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression1()

const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a * b + c - d / e ** f", {a: 2, b: 3, c: 40, d: 6, e: 4, f: 2});
    let expected = 100
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression2()
//
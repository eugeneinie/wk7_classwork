let x = 90
let y = 7

function addTwo(){
    let z = x + y
    return z
}

// Given the data below, write functions that take the above variable as parameter and does the ffg;
const productPrices = [25.99, 15.49, 10.99, 34.99, 8.99]

// Arranges from highest to lowest
function arrangeHL(){
    return productPrices.sort((a,b) => a - b)
}

// Calculates the sum of the products
function calcSumProd(){
    return productPrices.reduce((x,y) => x + y)
}

// Get's the average of the product price
function calculateAverage(){
    return productPrices.reduce((a,b) => a + b)/productPrices.length
}

// Calculates the range
function calcRange(){
    let min = arrangeHL()[0]
    let max = arrangeHL()[arrangeHL().length - 1] //??
    return max - min
}

// Adds 10 to all the prices and returns an array of increased prices 
function calculateRange() {
    return Math.max(...productPrices) - Math.min(...productPrices)
}

// Rounds up each price to the closest whole number
function add10() {
    return productPrices.map(price => price + 10).map(x => Number(x.toFixed(2)))
}

// Rounds each price to the closest whole number and returns only prices that are divisible by 3
function wholeNumber(){
    return productPrices.map(prices => parseInt(prices))
}

function roundWholeNum() {
    return productPrices.map(price => Math.round(price)).filter(x => x % 3 === 0)
}

function divideBy3() {
    return productPrices.filter(price => Math.round(price) % 3 === 0)
}

// Conditional statements
function resultStatus(score){
    let status
    if (score >= 50){
        status = 'pass'
    }
    else{
        status = 'fail'
    }

    return status
}
// const resultGrade = (score) => {
//     let status
//     if (score >= 70){
//         status = 'A'
//     }
//     else if(score >= 60){
//         status = 'B'
//     }
//     else if(score >= 50){
//         status = 'C'
//     }
//     else{
//         status = 'FF'
//     }
//     return status
// }

const resultGrade = (score) => {
    let status 
    if(score < 100 && !isNaN(score)) {
        if (score >= 70){
            status = 'A'
        }
        else if(score >= 60){
            status = 'B'
        }
        else if(score >= 50){
            status = 'C'
        }
        else{
            status = 'FF'
        }
    }
    else{
        status = 'the value is either greater than 100 or not a number'
    }

    return status
}

function checkVowel(str){
    const vowels = 'aeiou'
    let status
    str = str.toLowerCase()
    // check if index of the first letter exists in in vowels
    if(vowels.indexOf(str[0]) !== -1){
        status = 'vowels'
    }
    else{
        status = 'consonant'
    }
    return status
}

function truncate(str){
    let truncStr
    if (str.length > 15){
        truncStr = str.slice(0, 15).concat('...')
    }
    else{
        truncStr = str
    }
    return truncStr
}

// Tenary
// Check if a string starts with capital letter
const startWithCap = (str) => {
    let status 
    str[0] === str[0].toUpperCase() ? status = 'starts with uppercase' :
    status = 'starts with lowercase' 
    return status 
}

const statusOne = (score) => {
    let status
    score >= 50 ? status = 'pass': status = 'fail'
    return status
}

const statusTwo = (score) => {
    let status 
    score >= 70 ? status = 'A' :
    score >= 60 ? status = 'B' :
    score >= 50 ? status = 'C' :
    status = 'FF'
    return status
}
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let smallestSum = 0;
    let largestSum = 0;
    
    //Sort int array
    let sortedArr = arr.sort(function(a, b){return a - b});
    //collect smallest sum 
    for(let i = 0; i < 4; i++){
        smallestSum += sortedArr[i];
    }
    
    for(let i = 1; i < 5; i++){
        largestSum += sortedArr[i];
    }
    console.log(smallestSum, largestSum)
    
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

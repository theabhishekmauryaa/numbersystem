// const numbers = [
//     19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
//   ];
// for(let i = 0; i < numbers.length; i++){
//     let num = numbers[i];
//     let isPrime = true;
//     if(num < 2){
//         isPrime = false;
//     } else {
//         for(let j = 2; j < num; j++){
//             if(num % j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     if( isPrime){
//         console.log(num + " is a prime number.");
        
//     }
// }  




const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  let primes = [];
  let sumOfPrimes = 0;

for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    let isPrime = true;
    if(num < 2){
        isPrime = false;
    } else {
        for(let j = 2; j < num; j++){
            if(num % j === 0){
                isPrime = false;
                break;
            }
        }
    }

    if( isPrime){
      primes.push(num);
      sumOfPrimes +=  num;
        
    }
}  

console.log("Prime number in the array;", primes);
 if(primes.length > 0) {
    let minPrime = Math.min(...primes);
    let maxPrime = Math.max(...primes);

    console.log("Prime numberts in the array:", primes);
    console.log("Min Prime number in the array:",minPrime);
    console.log("Max Prime number in the array:",maxPrime);
    console.log("Sum of Prime Numbers:", sumOfPrimes);
    
    
 }

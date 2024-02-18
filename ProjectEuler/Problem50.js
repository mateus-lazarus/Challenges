// 1 - Generate all prime numbers until a X limite

// 2 - Generate a sum of all prime numbers found that will be below a X limit

// 3 - From all summed keep lowing until the sum is a prime number



// INPUT
let numberInputed = 1 * 1000 * 1000;
console.log(
   'Number inputed: ', numberInputed
)




// PART 1
const generatePrimeNumbersUntilLimit = (limitOfGeneration) => {
   // Initialize an array to track whether each number is prime
   let isPrime = new Array(limitOfGeneration + 1).fill(true);

   // 0 and 1 are not prime numbers
   isPrime[0] = isPrime[1] = false;

   // console.log('Prime array as it is defined:');
   // console.log(isPrime);

   // Iterate through the numbers starting from 2
   for (
      let possiblePrime = 2;
      possiblePrime <= Math.sqrt(limitOfGeneration);
      possiblePrime++
   )
   {
      // console.log('Starting to iterate through prime array')

      if (isPrime[possiblePrime]) {
         // console.log('Starting to mark as false multiples of ', possiblePrime);

         // Mark multiples of the current prime as non-prime
         for (
            let multiples = possiblePrime * possiblePrime;
            multiples <= limitOfGeneration;
            multiples += possiblePrime
         )
         {
            isPrime[multiples] = false;
            // console.log(isPrime, multiples);
         }
      }
   }

   // Extract prime numbers from the array
   let primes = [];

   for (let index = 2; index <= limitOfGeneration; index++) {
      if (isPrime[index]) {
         primes.push(index);
      }
   }

   return primes;
}

let primeNumbersArray = generatePrimeNumbersUntilLimit(numberInputed)

console.log(
   primeNumbersArray
);





// PART 2
const sumAllNumbersUntilAbsoluteLimit = (arrayOfPrimes, limitOfSum) => {
   let primesMap = { 'PrimesCount' : 0, 'PrimesSum' : 0, 'Primes' : [] };

   for (let index = 0; index < arrayOfPrimes.length; index++)
   {
      // Break the for loop when the sum of all primes be over number

      if (primesMap['PrimesSum'] + arrayOfPrimes[index] >= limitOfSum)
      {
         arrayOfPrimes = arrayOfPrimes.slice(0, primesMap['PrimesCount']);
         break;
      }

      primesMap['PrimesSum'] = primesMap['PrimesSum'] + arrayOfPrimes[index];
      primesMap['PrimesCount'] = index + 1;
   }

   primesMap['Primes'] = arrayOfPrimes;

   return primesMap;
}

let primeDictionary = sumAllNumbersUntilAbsoluteLimit(primeNumbersArray, numberInputed);

console.log(
   primeDictionary,
   `
      ${primeDictionary['PrimesCount']}
      ${primeDictionary['PrimesSum']}
      ${primeDictionary['Primes']}
   `
);





// PART 3

const checkIfIsPrime = (number) => {
   // Check divisibility from 2 to the square root of the number
   for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
         return false; // Not a prime number
      }
   }

   return true; // Prime number
}


const getBiggestPrimeSummedFromArray = (arrayOfPrimes, limitOfSum) => {
   let index = 0;

   while (!checkIfIsPrime(arrayOfPrimes['PrimesSum']))
   {
      arrayOfPrimes['PrimesCount'] -= 1;

      arrayOfPrimes['PrimesSum'] -= arrayOfPrimes['Primes'][index];

      arrayOfPrimes['Primes'][index] = 0;
      index += 1;

      if (arrayOfPrimes['PrimesSum'] < 2)
      {
         break;
      }
   }

   return arrayOfPrimes['PrimesSum'];
}


console.log(
   getBiggestPrimeSummedFromArray(primeDictionary, numberInputed)
);







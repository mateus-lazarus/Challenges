function solution(number) {
   // This is an optimization, as any factors larger than the square root
   //  must pair with factors smaller than the square root
   const validateIfDivisorIsLessThanSquareRoot = (divisor, number) => {
      return divisor <= Math.sqrt(number);
   }

   let i = 2;

   while (validateIfDivisorIsLessThanSquareRoot()) {
      // This step helps to remove smaller prime factors and focuses on finding larger ones
      if (number % i === 0) {
         number = number / i;
      }

      // We increment i by 1 and continue the loop to check the next potential factor
      else {
         i++;
      }
   }

   return number;
}

let number = 600851475143;

console.log(
  solution(number)
);
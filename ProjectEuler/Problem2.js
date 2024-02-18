function solution(limit) {
   // Fibonacci sequence
   let fibonacciSerie = [1, 1];
   let fibonacciLimit = limit;
   let fibonacciEvenNumbersList = [];

   const generateNextFibonacciNumber = () => {
      console.log('generating new number: ', fibonacciSerie[0], fibonacciSerie[1])

      let remindPreviousNumber = fibonacciSerie[1];

      fibonacciSerie[1] = fibonacciSerie[1] + fibonacciSerie[0];
      fibonacciSerie[0] = remindPreviousNumber;
   }

   const validateAndPushIntoArray = (value) => {
      if (value % 2 === 0)
      {
         fibonacciEvenNumbersList.push(value);
      }
   }

   while (fibonacciSerie[1] < fibonacciLimit)
   {
      console.log('Started for loop', fibonacciSerie[1], fibonacciSerie[0]);

      validateAndPushIntoArray(fibonacciSerie[1]);

      generateNextFibonacciNumber();
   }

  console.log(
    `
    ${fibonacciSerie},
    ${fibonacciLimit},
    ${fibonacciEvenNumbersList},
    `
  )

  let sumOfAllEvenNumbers = 0;
  for (let index = 0; index < fibonacciEvenNumbersList.length; index++)
  {
   sumOfAllEvenNumbers += fibonacciEvenNumbersList[index];
  }

  return sumOfAllEvenNumbers;
}

let limit = 4 * 1000 * 1000;

console.log(
  solution(limit)
);
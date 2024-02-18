// Given array of N integers
// Return TRUE if there is a Triplet(a,b,c) on the array
   // where A, B, C are on different indexes
// That satisfies A^2 + B^2 = C^2
// Otherwise, FALSE

function existsPythagoreanTriplet(arrayOfIntegers, arrayLength)
{
   if (arrayLength < 3)
   {
      return false;
   }

   let multipleA = 3;
   let multipleB = 4;
   let multipleC = 5;

   let possiblesTriplet = {};

   arrayOfIntegers.forEach(
      (value, index) => {
         possiblesTriplet[`${value / multipleA}`] = [index];

         let possibleMatchOfB = possiblesTriplet[`${value / multipleB}`];
         let possibleMatchOfC = possiblesTriplet[`${value / multipleC}`];

         if (possibleMatchOfB !== undefined)
         {
            possibleMatchOfB.push(index);
         }
         
         if (possibleMatchOfC !== undefined)
         {
            possibleMatchOfC.push(index);
         }
      }
   );

   let existsTriplet = false;

   Object.keys(possiblesTriplet).forEach(
      (key) => {
         console.log(possiblesTriplet[key])
         if (possiblesTriplet[key].length >= 3)
         {
            existsTriplet = true;
         }
      }
   )

   return existsTriplet;
}

console.log(
   existsPythagoreanTriplet([3, 2, 3, 5, 4, 4, 6, 5, 7, 10, 3, 6, 8, 10], 14)
);



// Celebrity doesn't know anyone, but everyone knows her
// We can only ask if "does A know B"
// Find the celebrity with the mininum amount of questions

// Celebrity MAY be in the party
// If everyone know her, then she is not present

// Input: A matrix with the same amount of index as persons in the party

function haveAcquaintance(matrix)
{
   // Loop for que olha quem as pessoas conhecem
   // Memória de quem já conhece alguém
   // Se for mencionado conhecer alguém novo, valida se esse novo conhece alguém

   let indexesWhoAreAcquainted = new Map();

   const isAlreadyKnownByList = (int) => {
      if (indexesWhoAreAcquainted.has(int))
      {
         return true;
      }

      return false;
   }

   const doesPersonKnowAnyone = (person) => {
      if(person.includes(1))
      {
         return true;
      }

      return false;
   }

   for (let index = 0; index < matrix.length; index++)
   {
      let person = matrix[index];

      if (isAlreadyKnownByList(person))
      {
         continue;
      }

      if (doesPersonKnowAnyone(person))
      {
         continue;
      }

      return [index, person];
   }
}

function solution(matrix)
{
   let solution = haveAcquaintance(matrix);
   if (solution == null)
   {
      return false;
   }
}



let party = [
   [0,0,0,1],
   [0,1,0,0],
   [0,0,0,1],
   [1,1,0,0]
]

let result = haveAcquaintance(party);

console.log(
   result
);
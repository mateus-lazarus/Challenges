const Benchmark = require('benchmark');

function solution1 (root) {
  solution(root);
}

function solution2 (root) {
  verticalOrder(root)
}

const suite = new Benchmark.Suite;

// Add functions to the suite
suite.add('Solution 1', function() {
  solution1(node);
})

suite.add('Solution 2', function() {
  solution2(node);
})
// Add more functions as needed

// Add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Benchmark complete');
})
// Run the tests
.run({ 'async': true });


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

function knows(a, b) 
    {
        return MATRIX[a][b]; 
         
    }
 
    // Returns -1 if a 'potential celebrity'
    // is not present. If present,
    // returns id (value from 0 to n-1).
    function findPotentialCelebrity(n)
    {
        // base case - when n reaches 0 , returns -1
        // since n represents the number of people,
        // 0 people implies no celebrity(= -1)
        if (n == 0)
            return -1;
 
        // find the celebrity with n-1
        // persons
        var id = findPotentialCelebrity(n - 1);
 
        // if there are no celebrities
        if (id == -1)
            return n - 1;
 
        // if the id knows the nth person
        // then the id cannot be a celebrity, but nth person
        // could be one
        else if (knows(id, n - 1) == 1) {
            return n - 1;
        }
        // if the nth person knows the id,
        // then the nth person cannot be a celebrity and the
        // id could be one
        else if (knows(n - 1, id) == 1) {
            return id;
        }
 
        // if there is no celebrity
        return -1;
    }
 
    // Returns -1 if celebrity
    // is not present. If present,
    // returns id (value from 0 to n-1).
    // a wrapper over findCelebrity
    function Celebrity(n)
    {
        // find the celebrity
        var id = findPotentialCelebrity(n);
 
        // check if the celebrity found
        // is really the celebrity
        if (id == -1)
            return id;
        else {
            var c1 = 0, c2 = 0;
 
            // check the id is really the
            // celebrity
            for (var i = 0; i < n; i++)
                if (i != id) {
                    c1 += knows(id, i);
                    c2 += knows(i, id);
                }
 
            // if the person is known to
            // everyone.
            if (c1 == 0 && c2 == n - 1)
                return id;
 
            return -1;
        }
    }

    var MATRIX = [ [ 0, 0, 1, 0 ], 
    [ 0, 0, 1, 0 ], 
    [ 0, 0, 0, 0 ], 
    [ 0, 0, 1, 0 ] ];
// https://www.codewars.com/kata/65781071e16df9dcbded1520

class Person
{
   constructor(name, dob, sex)
   {
      this.dateOfBirth = new Date(dob);
      this.name = name;
      this.teknonym = '';
      this.sex = sex;
      this.children = [];

      // Additional information for better use
      this.mostDistanteDescend;
      this.mostGenerationDistance;
      this.ascendent;
   }
}




// Finds:
//    1. Most Distant Generation
//    2. Elder Of That Generation
//    3. Build Tek of X


// Steps:
//    1 - Build a function to find the most distante generation
//       1.1 - Start from the root
//       1.2 - Iterate through the tree counting depth (similar to level order algorithm)
//       1.3 - Return the maximum depth
//       1.4 - Validate edge-cases as people without children or with just one child
//    
//    2 - Find the elder of a generation
//       2.1 - Maybe just create a level-order array would do it
//       2.1? - Or use the children array of every person
//       2.2 - Iterate through the items of determined level and find elder person 
//       2.3 - Return person
//    
//    3 - Build the tek of all persons
//       3.1 - Use the children array to iterate through the most distante distant generation
//       3.2 - Build a function to determine the terminology
//       3.2.1 - Receive a person and a depth distante
//       3.2.2 - And return a terminology
//       3.3 - Add right tek to the person
//    
//    
//    
//    Notes:
//       1. It can be interesting to create an auxiliar information in Person to reference the most distant descend person
//       2. Maybe through iterating inside the tree it is possible to create the tek or retain information to do it more efficiently in time after (trade-off: performance for memory space)
//    






// Add information of most distante descend person and distance quantity
// While iterating through the array, update that fields


// Not sure if it is faster to write while iterating the first time or iterate two times...




function buildTek(distance, sex, descend)
{
   if (sex === 'm' || sex === 'M')
   {
      if (distance === 1)
      {
         return `Father of ${descend.name}`;
      }

      if (distance === 2)
      {
         return `Grandfather of ${descend.name}`;
      }

      if (distance === 3)
      {
         return `Great-Grandfather of ${descend.name}`;
      }

      let tekName = '';

      for (let iteration = 0; iteration < distance - 3; iteration++)
      {
         tekName.concat('Great-');
      }

      return tekName.concat(`Great-Grandfather of ${descend.name}`);
   }

   if (sex === 'f' || sex === 'F')
   {
      if (distance === 1)
      {
         return `Mother of ${descend.name}`;
      }

      if (distance === 2)
      {
         return `Grandmother of ${descend.name}`;
      }

      if (distance === 3)
      {
         return `Great-Grandmother of ${descend.name}`;
      }

      let tekName = '';

      for (let iteration = 0; iteration < distance - 3; iteration++)
      {
         tekName.concat('Great-');
      }

      return tekName.concat(`Great-Grandmother of ${descend.name}`);
   }
}

function verifyIfIsTheElderDescend(ascendent, descend)
{
   if (ascendent.mostDistanteDescend == null)
   {
      ascendent.mostDistanteDescend = descend;
      return;
   }

   if (ascendent.mostDistanteDescend.dateOfBirth > descend.dateOfBirth)
   {
      ascendent.mostDistanteDescend = descend;
   }
}


let watchingPersons = [];
let queue = [];

function teknonymize(familyTree)
{
   if (familyTree.children.length === 0)
   {
      return familyTree;
   }

   if (familyTree.children.length === 1)
   {
      familyTree.mostGenerationDistance++;
      familyTree.teknonym = buildTek(familyTree.mostGenerationDistance, familyTree.sex, familyTree.children[0]);
   }

   familyTree.children.forEach(value => verifyIfIsTheElderDescend(familyTree, value));

   familyTree.teknonym = buildTek(familyTree.mostDistanteDescend, familyTree.sex, familyTree.mostDistanteDescend);

   familyTree.children.forEach(value => teknonymize(value));

   return familyTree;
}





// Input Data
let personTree = new Person('A', '1000/01/01', 'M');
personTree.children.push(new Person('B', '1001/01/01', 'M'));
personTree.children.push(new Person('C', '1002/01/01', 'F'));
personTree.children[0].children.push(new Person('D', '1002/01/01', 'F'));



let result = teknonymize(personTree)

console.dir(result);
console.log(result.teknonym);
// console.dir(result.mostDistanteDescend);

console.dir(result.children[0]);
console.dir(result.children[1]);
console.dir(result.children[0].children[0]);











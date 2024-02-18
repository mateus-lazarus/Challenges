class SpecialStack {
   constructor() {
      this.min = -1;
      this.stack = [];
   }

   isEmpty() {
      return this.stack.length == 0;
   }

   pop() {
      if (this.stack.length == 0) {
         console.log('Stack Underflow');
         return -1;
      }

      let lastElement = this.stack[this.stack.length - 1];
      this.stack.length--;

      return lastElement;
   }

   push(int) {
      if (this.stack.length == 0) {
         this.min = int;
      }

      this.stack[this.stack.length] = int

      if (this.min > int) {
         this.min = int;
      }
   }

   getMin() {
      return this.min;
   }
}

// Driver Code 
let s = new SpecialStack();

let arr = [3, 2, 6, 1, 8, 5, 5, 5, 5, -10];

for(let i = 0; i < arr.length; i++) 
{ 
   s.push(arr[i]);
   console.log(s.getMin());
}

console.log();

for(let i = 0; i < arr.length + 1; i++)
{
   console.log(
      s.pop()
   );

   console.log(
      s.getMin()
   );
} 
function diagonalPrint(root){
   if(root == null) return;
   
   let result = [];
 
   q = [];
   q.push(root);
    
   while(q.length > 0){
       let size = q.length;
       answer = [];
        
       while(size--){
           let temp = q.shift();
            
           // traversing each component
           while(temp != null){
               answer.push(temp.key);
                
               if(temp.left != null)
                   q.push(temp.left);
                
               temp = temp.right;
           }
       }
       result.push(answer);
   }
 
   for(let i = 0; i < result.length; i++){
     let diagonal = [];
 
     for(let j = 0; j < result[i].length; j++){
       diagonal.push(result[i][j]);
     }
 
     console.log(diagonal);
   }
 }
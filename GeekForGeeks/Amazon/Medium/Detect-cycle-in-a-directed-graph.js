// https://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/

// Detect Cycle in a directed graph using colors


// Approach Breadth First Traversal WITH COMMENTS
// Time: O(Vertices + Edges)     Space: O(Vertices)




// A Javascript program to detect cycle in
// an undirected graph using BFS.
 
// A DFS based approach to find if 
// there is a cycle in a directed graph. 
// This approach strictly follows the 
// algorithm given in CLRS book. 
var WHITE = 0
var GRAY = 1
var BLACK = 2;
 
// Graph class represents a directed graph 
// using adjacency list representation 
class Graph 
{
   // Constructor 
   constructor(vertices)
   {
      this.V = vertices;

      this.adjList = Array.from(
         Array(this.V), () => Array(this.V)
      );
   }
}
 
// Utility function to add an edge 
function addEdge(graph, vertice1, vertice2)
{
   // Push v to u's list. 
   graph.adjList[vertice1].push(vertice2); 
}

// Recursive function to find if there is back edge 
// in DFS subtree tree rooted with 'u' 
function DFSUtil(graph, vertice, color) 
{
   // GRAY : This vertex is being processed (DFS 
   // for this vertex has started, but not 
   // ended (or this vertex is in function 
   // call stack) 
   color[vertice] = GRAY;
   
   // Iterate through all adjacent vertices
   for(var iN of graph.adjList[vertice]) 
   {
      // If there is
      if (color[iN] == GRAY)
         return true;
            
      // If v is not processed and there is a back 
      // edge in subtree rooted with v 
      if (color[iN] == WHITE && DFSUtil(graph, iN, color) == true)
         return true;
   }
   
   // Mark this vertex as processed 
   color[vertice] = BLACK;
   return false;
}

// Returns true if there is a cycle in graph
function isCyclic(graph)
{
   // Initialize color of all vertices as WHITE
   var color =  Array(graph.V);

   for(var i = 0; i < graph.V; i++)
   {
      color[i] = WHITE;
   }
   
   // Do a DFS traversal beginning with all 
   // vertices 
   for(var i = 0; i < graph.V; i++) 
   {
      if (color[i] == WHITE)
      {
         if (DFSUtil(graph, i, color) == true) 
            return true;
      } 
   }

   return false;
}





// Driver Code
 
// Create a graph given in the above diagram
var graph = new Graph(4);
addEdge(graph, 0, 1);
addEdge(graph, 0, 2);
addEdge(graph, 1, 2);
addEdge(graph, 2, 0);
addEdge(graph, 2, 3);
addEdge(graph, 3, 3);
 
if (isCyclic(graph))
   document.write("Graph contains cycle");
else
   document.write("Graph doesn't contain cycle");










// Approach Breadth First Traversal WITHOUT COMMENTS
// Time: O(Vertices + Edges)     Space: O(Vertices)


var WHITE = 0
var GRAY = 1
var BLACK = 2;
   
class Graph 
{
   constructor(vertices)
   {
      this.V = vertices;

      this.adjList = Array.from(
         Array(this.V), () => Array(this.V)
      );
   }
}

function addEdge(graph, vertice1, vertice2)
{
   graph.adjList[vertice1].push(vertice2); 
}

function DFSUtil(graph, vertice, color) 
{
   color[vertice] = GRAY;
   
   for (var iN of graph.adjList[vertice]) 
   {
      if (color[iN] == GRAY)
         return true;
            
      if (color[iN] == WHITE && DFSUtil(graph, iN, color) == true)
         return true;
   }
   
   color[vertice] = BLACK;
   
   return false;
}

function isCyclic(graph)
{
   var color =  Array(graph.V);

   for (var i = 0; i < graph.V; i++)
      color[i] = WHITE;
   
   for (var i = 0; i < graph.V; i++) 
      if (color[i] == WHITE)
         if (DFSUtil(graph, i, color) == true) 
            return true;

   return false;
}




















// Leetcode 207 (Premium)
// https://leetcode.com/discuss/interview-question/1409034/6-cycle-in-directed-graph



// Time Complexity: O(V + E)
// Space Complexity: O(V)

class Solution {
   isCyclicUtil(v, visited, recStack, adj) {
      if (!visited[v]) {
         visited[v] = true;
         recStack[v] = true;

         for (let i = 0; i < adj[v].length; ++i) {
            if (!visited[adj[v][i]] && this.isCyclicUtil(adj[v][i], visited, recStack, adj))
               return true;
            else if (recStack[adj[v][i]])
               return true;
         }
      }

      recStack[v] = false;

      return false;
   }

   isCyclic(V, adj) {
      const visited = new Array(V).fill(false);
      const recStack = new Array(V).fill(false);

      for (let i = 0; i < V; i++)
         if (this.isCyclicUtil(i, visited, recStack, adj))
            return true;

      return false;
   }
}

// Let's see BFS (Kahn's Algorithm) based Solution also:

// Time Complexity: O(V + E)
// Space Complexity: O(V)

class Graph 
{
   constructor(vertices)
   {
      this.V = vertices;

      // Adjacency List as ArrayList of ArrayList's
      this.adj = new Array(this.V);

      for (let i = 0 ; i < this.V ; i++)
      {
         this.adj[i] = new Array()
      }
   }

   // Function to add an edge into the graph
   addEdge(vertice1, vertice2) 
   {
      this.adj[vertice1].push(vertice2)
   }
}

function topologicalSort(graph, V) {
   const in_degree = new Array(V).fill(0);

   for (let u = 0; u < V; u++) {
      for (const x of graph[u])
         in_degree[x]++;
   }

   const q = [];
   for (let i = 0; i < V; i++) {
      if (in_degree[i] === 0)
         q.push(i);
   }

   let count = 0;
   while (q.length > 0) {
      const u = q.shift();

      for (const x of graph[u]) {
         if (--in_degree[x] === 0)
            q.push(x);
      }

      count++;
   }

   if (count !== V)
      console.log("There exists a cycle in the graph");
   else
      console.log("There exists no cycle in the graph");
}



function main() {
   const vertices = 5;
   const graph = new Graph(vertices);
   graph.addEdge(0, 1);
   graph.addEdge(4, 1);
   graph.addEdge(1, 2);
   graph.addEdge(2, 3);
   graph.addEdge(3, 1);

   topologicalSort(graph, vertices);
}

main();

























// Cycle without using graph class









// Time Complexity: O(V + E)
// Space Complexity: O(V)

class Solution {
   isCyclicUtil(v, visited, recStack, adj) {
       if (!visited[v]) {
           visited[v] = true;
           recStack[v] = true;

           for (let i = 0; i < adj[v].length; ++i) {
               if (!visited[adj[v][i]] && this.isCyclicUtil(adj[v][i], visited, recStack, adj))
                   return true;
               else if (recStack[adj[v][i]])
                   return true;
           }
       }
       recStack[v] = false;
       return false;
   }

   isCyclic(V, adj) {
       const visited = new Array(V).fill(false);
       const recStack = new Array(V).fill(false);
       for (let i = 0; i < V; i++)
           if (this.isCyclicUtil(i, visited, recStack, adj))
               return true;
       return false;
   }
}

// Let's see BFS (Kahn's Algorithm) based Solution also:

// Time Complexity: O(V + E)
// Space Complexity: O(V)

function topologicalSort(adj, V) {
   const in_degree = new Array(V).fill(0);

   for (let u = 0; u < V; u++) {
       for (const x of adj[u])
           in_degree[x]++;
   }

   const q = [];
   for (let i = 0; i < V; i++) {
       if (in_degree[i] === 0)
           q.push(i);
   }

   let count = 0;
   while (q.length > 0) {
       const u = q.shift();

       for (const x of adj[u]) {
           if (--in_degree[x] === 0)
               q.push(x);
       }
       count++;
   }

   if (count !== V)
       console.log("There exists a cycle in the graph");
   else
       console.log("There exists no cycle in the graph");
}

function addEdge(adj, u, v) {
   adj[u].push(v);
}

function main() {
   const V = 5;
   const adj = new Array(V).fill().map(() => []);
   addEdge(adj, 0, 1);
   addEdge(adj, 4, 1);
   addEdge(adj, 1, 2);
   addEdge(adj, 2, 3);
   addEdge(adj, 3, 1);

   topologicalSort(adj, V);
}

main();




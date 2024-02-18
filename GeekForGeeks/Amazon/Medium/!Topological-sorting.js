// https://www.geeksforgeeks.org/topological-sorting/

// Topological Sorting

// Topological sorting for Directed Acyclic Graph (DAG)
// Topological Sorting for a graph is not possible if the graph is not a DAG






// Approach Depth First Search WITH COMMENTS
// Time: O(Vertices + Edges)     Spaces: O(Vertices) // Needed for the stack

// This class represents a directed graph
// using adjacency list representation
class Graph
{
   // Constructor
   constructor(numberOfVertices)
   {
      // Number of vertices
      this.V = numberOfVertices

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

   // A recursive function used by topologicalSort
   topologicalSortUtil(vertice, visited, stack)
   {
      // Mark the current node as visited.
      visited[vertice] = true;
      let i = 0;

      // Recur for all the vertices adjacent
      // to thisvertex
      for(i = 0 ; i < this.adj[vertice].length ; i++)
      {
         if(!visited[this.adj[vertice][i]]) {
            this.topologicalSortUtil(this.adj[vertice][i], visited, stack)
         }
      }

      // Push current vertex to stack
      // which stores result
      stack.push(vertice);
   }

   // The function to do Topological Sort.
   // It uses recursive topologicalSortUtil()
   topologicalSort()
   {
      let stack = new Array()

      // Mark all the vertices as not visited
      let visited = new Array(this.V);
      for (let i = 0 ; i < this.V ; i++)
      {
         visited[i] = false;
      }

      // Call the recursive helper
      // function to store
      // Topological Sort starting
      // from all vertices one by one
      for (let i = 0 ; i < this.V ; i++)
      {
         if (visited[i] == false) {
            this.topologicalSortUtil(i, visited, stack);
         }
      }

      // Print contents of stack
      while (stack.length != 0)
      {
         console.log(stack.pop() + " ")
      }
   }
}

// Driver Code
var graph = new Graph(6)
graph.addEdge(5, 2)
graph.addEdge(5, 0)
graph.addEdge(4, 0)
graph.addEdge(4, 1)
graph.addEdge(2, 3)
graph.addEdge(3, 1)

console.log("Following is a Topological sort of the given graph")

// Function Call
graph.topologicalSort()
















// Approach Depth First Search WITHOUT COMMENTS
// Time: O(Vertices + Edges)     Spaces: O(Vertices) // Needed for the stack


class Graph
{
   topologicalSortUtil(vertice, visited, stack)
   {
      visited[vertice] = true;
      let i = 0;

      for (i = 0 ; i < this.adj[vertice].length ; i++)
         if (!visited[this.adj[vertice][i]])
            this.topologicalSortUtil(this.adj[vertice][i], visited, stack)

      stack.push(vertice);
   }

   topologicalSort()
   {
      let stack = new Array()

      let visited = new Array(this.V);

      for (let i = 0 ; i < this.V ; i++)
         visited[i] = false;

      for (let i = 0 ; i < this.V ; i++)
         if (visited[i] == false)
            this.topologicalSortUtil(i, visited, stack);

      while (stack.length != 0)
         console.log(stack.pop() + " ");
   }
}
















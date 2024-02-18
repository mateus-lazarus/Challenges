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
   console.log("Graph contains cycle");
else
   console.log("Graph doesn't contain cycle");












var WHITE = 0
var GRAY = 1
var BLACK = 2;

function DFSUtil(graph, vertice, color) 
{
    color[vertice] = GRAY;
    
    for(var iN of graph.adjList[vertice]) 
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

    for(var i = 0; i < graph.V; i++)
    {
        color[i] = WHITE;
    }
    
    for(var i = 0; i < graph.V; i++) 
    {
        if (color[i] == WHITE)
            if (DFSUtil(graph, i, color) == true) 
                return true;
    }

    return false;
}
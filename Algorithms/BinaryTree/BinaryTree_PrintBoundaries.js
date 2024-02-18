// A function to print all left boundary nodes, 
// except a leaf node.
// Print the nodes in TOP DOWN manner
function printBoundaryLeft(node)
{
    if (node == null)
        return;

    if (node.left != null) {
        // to ensure top down order, print the node
        // before calling itself for left subtree
        console.log(node.key + " ");
        printBoundaryLeft(node.left);
    }
    else if (node.right != null) {
        console.log(node.key + " ");
        printBoundaryLeft(node.right);
    }

    // do nothing if it is a leaf node, this way we avoid
    // duplicates in output
}

// A function to print all right boundary nodes, 
// except a leaf node
// Print the nodes in BOTTOM UP manner
function printBoundaryRight(node)
{
    if (node == null)
        return;

    if (node.right != null) {
        // to ensure bottom up order, first call for right
        // subtree, then print this node
        printBoundaryRight(node.right);
        console.log(node.key + " ");
    }
    else if (node.left != null) {
        printBoundaryRight(node.left);
        console.log(node.key + " ");
    }
    // do nothing if it is a leaf node, this way we avoid
    // duplicates in output
}

// A function to do boundary traversal of a given binary tree
function printBoundary(node)
{
    if (node == null)
        return;

    console.log(node.key + " ");

    // Print the left boundary in top-down manner.
    printBoundaryLeft(node.left);

    // Print all leaf nodes
    printLeaves(node.left);
    printLeaves(node.right);

    // Print the right boundary in bottom-up manner
    printBoundaryRight(node.right);
}








function printLeaves(node)
{
    if (node == null)
        return;

    printLeaves(node.left);
    
    if (node.left == null && node.right == null)
        console.log(node.key + " ");
    
    printLeaves(node.right);
}

function printBoundaryLeft(node)
{
    if (node == null)
        return;

    else if (node.left != null) {
        console.log(node.key + " ");
        printBoundaryLeft(node.left);
    }

    else if (node.right != null) {
        console.log(node.key + " ");
        printBoundaryLeft(node.right);
    }
}

function printBoundaryRight(node)
{
    if (node == null)
        return;

    else if (node.right != null) {
        printBoundaryRight(node.right);
        console.log(node.key + " ");
    }

    else if (node.left != null) {
        printBoundaryRight(node.left);
        console.log(node.key + " ");
    }
}

function printBoundary(node)
{
    if (node == null)
        return;

    console.log(node.key + " ");

    printBoundaryLeft(node.left);

    printLeaves(node.left);
    printLeaves(node.right);

    printBoundaryRight(node.right);
}
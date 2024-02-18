function printLeaves(node)
{
    if (node == null)
        return;

    printLeaves(node.left);
    // Print it if it is a leaf node
    if (node.left == null && node.right == null)
        console.log(node.key + " ");
    printLeaves(node.right);
}
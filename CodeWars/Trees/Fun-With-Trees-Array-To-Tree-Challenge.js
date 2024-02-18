function arrayToTree(arrayInput) {
	if (arrayInput.length === 0) {
	  return;
	}
	
	if (arrayInput.length === 1) {
	  return new TreeNode(arrayInput[0]);
	}
	
	if (arrayInput.length === 2) {
	  return new TreeNode(arrayInput[0], new TreeNode(arrayInput[1]));
	}
	
	if (arrayInput.length === 3) {
	  return new TreeNode(arrayInput[0], new TreeNode(arrayInput[1]), new TreeNode(arrayInput[2]));
	}
	
	let newTree = new TreeNode(arrayInput.shift(), null, null);
	
	const queue = [];
	queue.push(newTree);

	while (queue.length > 0)
	{
		if (arrayInput.length === 0) {
			break;
		}

		let tempNode = queue.shift();

		if (arrayInput.length > 0) {
			tempNode.left = new TreeNode(arrayInput.shift());
			queue.push(tempNode.left);
		}

		if (arrayInput.length > 0) {
			tempNode.right = new TreeNode(arrayInput.shift());
			queue.push(tempNode.right);
		}
	}
	
	return newTree;
}

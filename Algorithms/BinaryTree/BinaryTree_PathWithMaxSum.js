function maxSum(root) {
  if (!root)
    return 0

  let {value, left, right} = root

  if (!right)
    return value + maxSum(left)

  if (!left)
    return value + maxSum(right)
   
  return value + Math.max(maxSum(left), maxSum(right))
}
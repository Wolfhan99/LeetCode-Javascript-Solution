function f(root) {
  if (!root) return 1;
  res = 0
  leftCount = 0, rightCount = 0;
  const helper = (node) => {
    if (!node.left && !node.right) {
      res++;
      return
    }
    if (node.left && node.right && leftCount == rightCount) {
      res++;
    }
    
  }
}

function recoverTree(lists) {
  if (lists.length == 0) return null;
  let root = new TreeNode(1);
  let res = root;
  
  const helper = (node) => {
    while (head) {
      if (!node.left) {
        node.left = head;
        head = head.next;
        node = node.left;
        
      } else if(node.left && !node.right){
        node.right = head;
        head = head.next;
        node = node.left
      }
    }
  }
  for (head of lists) {
    head = head.next;
    helper(root);
  }
  return res;
}
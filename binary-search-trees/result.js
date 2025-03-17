// Node class: each node holds a data value and pointers to its left and right children.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function that builds a balanced BST from an array by sorting and removing duplicates.
function buildTree(array) {
  // Remove duplicates and sort array
  const sortedArray = [...new Set(array)].sort((a, b) => a - b);
  
  // Recursive helper function
  function buildTreeRecursive(arr) {
    if (arr.length === 0) return null;
    
    const mid = Math.floor(arr.length / 2);
    const node = new Node(arr[mid]);
    node.left = buildTreeRecursive(arr.slice(0, mid));
    node.right = buildTreeRecursive(arr.slice(mid + 1));
    
    return node;
  }
  
  return buildTreeRecursive(sortedArray);
}

// Tree class: holds a reference to the tree's root and provides a number of operations.
class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  // INSERT: Traverses the tree and inserts a new value.
  insert(value) {
    const newNode = new Node(value);
    
    // Helper recursive function to insert node.
    const insertRecursively = (node, newNode) => {
      if (node === null) return newNode;
      
      if (newNode.data < node.data) {
        node.left = insertRecursively(node.left, newNode);
      } else if (newNode.data > node.data) {
        node.right = insertRecursively(node.right, newNode);
      }
      // If the value is already present, we do nothing (or you could decide to handle duplicates)
      return node;
    };
    
    this.root = insertRecursively(this.root, newNode);
  }

  // DELETE: Remove a node with the given value from the BST.
  deleteItem(value) {
    // Helper function to find the minimum node in a subtree.
    const findMin = (node) => {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    };

    // Recursive deletion function.
    const deleteRecursively = (node, value) => {
      if (node === null) return null;

      if (value < node.data) {
        node.left = deleteRecursively(node.left, value);
      } else if (value > node.data) {
        node.right = deleteRecursively(node.right, value);
      } else {
        // Node found: handle deletion cases

        // Case 1: Node with only one child or no child
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        // Case 2: Node with two children.
        // Get the in-order successor (smallest in the right subtree)
        let temp = findMin(node.right);
        node.data = temp.data;
        // Delete the in-order successor.
        node.right = deleteRecursively(node.right, temp.data);
      }
      return node;
    };

    this.root = deleteRecursively(this.root, value);
  }

  // FIND: Returns the node with the given value.
  find(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.data) return current;
      current = value < current.data ? current.left : current.right;
    }
    return null; // not found
  }

  // LEVEL ORDER TRAVERSAL: Breadth-first traversal.
  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for levelOrder traversal.");
    }
    const queue = [];
    queue.push(this.root);
    
    while (queue.length) {
      const node = queue.shift();
      if (node !== null) {
        callback(node);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
    }
  }

  // INORDER TRAVERSAL: Left, Root, Right.
  inOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for inOrder traversal.");
    }
    const inOrderRec = (node) => {
      if (node !== null) {
        inOrderRec(node.left);
        callback(node);
        inOrderRec(node.right);
      }
    };
    inOrderRec(this.root);
  }

  // PREORDER TRAVERSAL: Root, Left, Right.
  preOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for preOrder traversal.");
    }
    const preOrderRec = (node) => {
      if (node !== null) {
        callback(node);
        preOrderRec(node.left);
        preOrderRec(node.right);
      }
    };
    preOrderRec(this.root);
  }

  // POSTORDER TRAVERSAL: Left, Right, Root.
  postOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for postOrder traversal.");
    }
    const postOrderRec = (node) => {
      if (node !== null) {
        postOrderRec(node.left);
        postOrderRec(node.right);
        callback(node);
      }
    };
    postOrderRec(this.root);
  }

  // HEIGHT: Returns the height of a given node (number of edges on the longest path from node to a leaf).
  height(node = this.root) {
    if (node === null) return -1; // height of an empty tree is -1, height of leaf is 0.
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  // DEPTH: Returns the number of edges from the given node to the root.
  // Since nodes don't have parent pointers, we traverse from the root.
  depth(target, node = this.root, currentDepth = 0) {
    if (node === null) return -1; // target not found
    if (node.data === target.data) return currentDepth;
    const left = this.depth(target, node.left, currentDepth + 1);
    if (left !== -1) return left;
    return this.depth(target, node.right, currentDepth + 1);
  }

  // isBalanced: A tree is balanced if for every node, the difference between left and right subtree heights is no more than 1.
  isBalanced(node = this.root) {
    if (node === null) return true;
    
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // rebalance: Rebuilds the tree into a balanced BST.
  rebalance() {
    // First, get an array of the current values via an inOrder traversal.
    const nodes = [];
    this.inOrder((node) => nodes.push(node.data));
    
    // Rebuild the tree from the sorted array.
    this.root = buildTree(nodes);
  }
}

// Optional: prettyPrint function to visualize the tree.
function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) return;
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

// Example usage:
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

// Testing insert
tree.insert(10);
tree.insert(2);

// Testing delete
tree.deleteItem(23);

// Testing find
console.log("Find 8:", tree.find(8));

// Traversals (printing node data)
console.log("Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("In Order:");
tree.inOrder((node) => console.log(node.data));

console.log("Pre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("Post Order:");
tree.postOrder((node) => console.log(node.data));

// Height of root node.
console.log("Height of tree:", tree.height());

// Depth of a given node (find node first)
const node8 = tree.find(8);
console.log("Depth of node 8:", tree.depth(node8));

// Check if tree is balanced.
console.log("Is tree balanced?", tree.isBalanced());

// Imbalance the tree, then rebalance.
tree.insert(10000);
tree.insert(20000);
tree.insert(30000);
console.log("Is tree balanced after inserting high values?", tree.isBalanced());
tree.rebalance();
console.log("Tree rebalanced. Is tree balanced now?", tree.isBalanced());

// Print the final tree structure.
prettyPrint(tree.root);

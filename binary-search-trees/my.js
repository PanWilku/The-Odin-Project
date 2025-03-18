class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


function sortedArrToBST(arr) {
    return sortedArrToBSTRecursion(arr, 0, arr.length - 1);
}


function sortedArrToBSTRecursion(arr, start, end) {
    if(start > end) {
        return null
    }

    let mid = start + Math.floor((end - start) / 2)

    let root = new Node(arr[mid])

    root.left = sortedArrToBSTRecursion(arr, start, mid - 1)

    root.right = sortedArrToBSTRecursion(arr, mid + 1, end)

    return root
}

function preOrder(root) {
    if (root === null) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}


let arr = [3, 5, 7, 9, 11, 1, 3, 4, 5, 8]
arr.sort((a, b) => a - b);
const root = sortedArrToBST(arr);
preOrder(root);
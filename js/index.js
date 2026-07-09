import BST from "./bst.js"

const bst = new BST()

bst.insert(10)
bst.insert(8)
bst.insert(12)
bst.insert(9)
bst.insert(11)

console.log(bst.toArray())

bst.delete(12)

console.log(bst.toArray())

bst.delete(8)

console.log(bst.toArray())

bst.delete(10)

console.log(bst.toArray())
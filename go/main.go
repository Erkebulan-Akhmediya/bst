package main

import "fmt"

func main() {
	var root *treeNode
	root = insert(root, 10)
	root = insert(root, 5)
	root = insert(root, 15)
	root = insert(root, 7)
	root = insert(root, 3)
	root = insert(root, 12)
	root = insert(root, 17)

	printTree(root)
	fmt.Println()
	fmt.Printf("includes %d: %v\n", 15, includes(root, 15))

	root = delete(root, 15)

	printTree(root)
	fmt.Println()
	fmt.Printf("includes %d: %v\n", 15, includes(root, 15))

	root = delete(root, 7)

	printTree(root)
	fmt.Println()
}

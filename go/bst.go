package main

import "fmt"

type treeNode struct {
	val   int
	left  *treeNode
	right *treeNode
}

func insert(node *treeNode, val int) *treeNode {
	if node == nil {
		return &treeNode{
			val: val,
		}
	}
	if val < node.val {
		node.left = insert(node.left, val)
	} else {
		node.right = insert(node.right, val)
	}
	return node
}

func delete(node *treeNode, val int) *treeNode {
	if node == nil {
		return node
	}
	if val < node.val {
		node.left = delete(node.left, val)
		return node
	}
	if val > node.val {
		node.right = delete(node.right, val)
		return node
	}
	if node.left == nil {
		return node.right
	}
	if node.right == nil {
		return node.left
	}
	successor := getSuccessor(node)
	node.val = successor.val
	node.right = delete(node.right, successor.val)
	return node
}

func getSuccessor(node *treeNode) *treeNode {
	successor := node.right
	for successor != nil && successor.left != nil {
		successor = successor.left
	}
	return successor
}

func includes(node *treeNode, val int) bool {
	if node == nil {
		return false
	}
	if node.val == val {
		return true
	}
	return includes(node.left, val) || includes(node.right, val)
}

func printTree(node *treeNode) {
	if node == nil {
		return
	}

	printTree(node.left)
	fmt.Printf("%d ", node.val)
	printTree(node.right)
}

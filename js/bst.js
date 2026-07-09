class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

export default class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        if (this.root == null) {
            this.root = new Node(val)
            return
        }
        this._insert(this.root, val)
    }

    _insert(node, val) {
        if (val < node.val) {
            if (node.left == null) {
                node.left = new Node(val)
            } else {
                this._insert(node.left, val)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(val)
            } else {
                this._insert(node.right, val)
            }
        }
    }

    toArray() {
        return this._toArray(this.root)
    }

    _toArray(node) {
        if (node == null)
            return []
        return [...this._toArray(node.left), node.val, ...this._toArray(node.right)]
    }

}
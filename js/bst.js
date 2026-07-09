class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

    insert(val) {
        if (val < this.val) {
            if (this.left == null) {
                this.left = new Node(val)
            } else {
                this.left.insert(val)
            }
        } else {
            if (this.right == null) {
                this.right = new Node(val)
            } else {
                this.right.insert(val)
            }
        }
    }

    toArray() {
        return [
            ...this.left?.toArray() ?? [], 
            this.val, 
            ...this.right?.toArray() ?? []
        ]
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
        this.root.insert(val)
    }

    toArray() {
        return this.root?.toArray() ?? []
    }

}
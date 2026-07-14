#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>

struct Node {
    int val;
    struct Node *left;
    struct Node *right;
};

struct Node *newNode(int val) {
    struct Node *node = malloc(sizeof(struct Node));
    if (node == NULL)
        return NULL;
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

struct Node *insert(struct Node *node, int val) {
    if (node == NULL)
        return newNode(val);
    
    if (val < node->val) {
        node->left = insert(node->left, val);
    } else {
        node->right = insert(node->right, val);
    }
    return node;
}

void freeTree(struct Node *node) {
    if (node == NULL)
        return;
    
    freeTree(node->left);
    freeTree(node->right);
    node->left = NULL;
    node->right = NULL;
    free(node);
}

void printTree(struct Node *node) {
    if (node == NULL)
        return;

    printTree(node->left);
    printf("%d ", node->val);
    printTree(node->right);
}

int main() {
    struct Node *root = NULL;
	root = insert(root, 10);
	root = insert(root, 5);
	root = insert(root, 15);
	root = insert(root, 7);
	root = insert(root, 3);
	root = insert(root, 12);
	root = insert(root, 17);

	printTree(root);
    printf("\n");

    freeTree(root);
    return 0;
}
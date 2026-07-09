import BST from "./bst.js"

function cmpArr(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false

    for (let i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i])
            return false
    return true
}

const bst = new BST()

let vals = []

for (let i = 0; i < 10; i++) {
    const val = Math.floor(Math.random() * 100)
    vals.push(val)
    bst.insert(val)
}

console.log(bst.toArray())

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * vals.length)
    const val = vals[index]
    bst.delete(val)

    if (index == 0)
        vals = vals.slice(1)
    else if (index == vals.length - 1)
        vals.pop()
    else
        vals = [...vals.slice(0, index), ...vals.slice(index+1)]

    console.log(`deleted ${val}: ${cmpArr(bst.toArray(), vals.toSorted((a, b) => a - b)) ? 'seccess' : `failure (bst: ${bst.toArray()}, vals: ${vals.toSorted((a, b) => a - b)})`}`)
}
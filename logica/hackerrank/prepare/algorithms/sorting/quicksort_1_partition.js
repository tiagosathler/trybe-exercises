// https://www.hackerrank.com/challenges/quicksort1/problem

function quickSort(arr) {
    const n = arr.length;
    const p = arr[0]
    
    const left = []
    const equal = [p]
    const right = []

    for (let i = 1; i < n; i++) {
        if (arr[i] > p) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...left, ...equal, ...right]
}

console.log(quickSort([4, 5, 3, 7, 2]));

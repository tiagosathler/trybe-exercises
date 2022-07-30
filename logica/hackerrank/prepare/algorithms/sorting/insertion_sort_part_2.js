// https://www.hackerrank.com/challenges/insertionsort2/problem

const arr = [1, 4, 3, 5, 6, 2];
const n = arr.length;

/*
    arr = [1, 4, 3, 5, 6, 2]

    saída esperada:
    (1) 1 4 3 5 6 2 
    (2) 1 3 4 5 6 2 
    (3) 1 3 4 5 6 2 
    (4) 1 3 4 5 6 2 
    (5) 1 2 3 4 5 6 

    (1)     arr[1] < arr[0]
            4 < 1 -> false: faz nada
            saída: 1 4 3 5 6 2

    (2):    arr[2] < arr[1]
            3 < 4 -> true: troca arr[2] = 4 e arr[1] = 3
            arr[1] < arr[0]
            3 < 1 -> false: faz nada
            saída: 1 3 4 5 6 2

    (3):    arr[3] < arr[2]
            5 < 4 -> false: faz nada
            saída: 1 3 4 5 6 2

    (4):    arr[4] < arr[3]
            6 < 5 -> false: faz nada
            saída: 1 3 4 5 6 2

    (5):    arr[5] < arr[4]
            2 < 6 -> true: troca arr[5] = 6 e arr[4] = 2
            arr[4] < arr[3]
            2 < 5 -> true: troca arr[4] = 5 e arr[3] = 2
            arr[3] < arr[2]
            2 < 4 -> true: troca arr[3] = 4 e arr[2] = 2
            arr[2] < arr[1]
            2 < 3 -> true: troca arr[2] = 3 e arr[1] = 2
            arr[1] < arr[0]
            2 < 1 -> false: faz nada
*/

let previous = arr[0];

for (let i=1; i<n; i++) {
    let j = i;
    while (arr[j] < arr[j-1] && j > 0) {
        previous = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = previous
        j -= 1
    }
    console.log(arr.join(' '))
}
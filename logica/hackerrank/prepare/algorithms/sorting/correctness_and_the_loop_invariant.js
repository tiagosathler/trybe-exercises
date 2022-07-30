function insertionSort(N, arr) {
    for(let i = 1; i<N; i++) {
        let value = arr[i];
        let j = i - 1;
        while(j >= 0 && value < arr[j]) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = value;
    }
    console.log(arr.join(' '));
}

insertionSort(6, [7, 4, 3, 5, 6, 2])
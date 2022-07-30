const arr = [1, 3, 4, 5, 6, 7, 2];
const n = arr.length;

let last = arr[n-1]
for (let i=n-2; i>=-1; i--) {
    if (arr[i] > last && i >= 0) {
        arr[i+1] = arr[i];
    } else {
        arr[i+1] = last;
        console.log(arr.join(" ") + "\n");
        break;
    }
    console.log(arr.join(" ") + "\n");
}

// https://www.hackerrank.com/challenges/countingsort4/problem

/*
Sample Input:
    20
    (00) 0 ab (-)
    (01) 6 cd (-)
    (02) 0 ef (-)
    (03) 6 gh (-)
    (04) 4 ij (-)
    (05) 0 ab (-)
    (06) 6 cd (-)
    (07) 0 ef (-)
    (08) 6 gh (-)
    (09) 0 ij (-)
    ---------- ^ primeira metade original deve ser substituída por '-'
    (10) 4 that
    (11) 3 be
    (12) 0 to
    (13) 1 be
    (14) 5 question
    (15) 1 or
    (16) 2 not
    (17) 4 is
    (18) 2 to
    (19) 4 the
    
    Sorted:
    (00) 0 - (ab)
    (01) 0 - (ef)
    (02) 0 - (ab)
    (03) 0 - (ef)
    (04) 0 - (ij)
    (05) 0 to
    (06) 1 be
    (07) 1 or
    (08) 2 not
    (09) 2 to
    (10) 3 be
    (11) 4 - (ij)
    (12) 4 that
    (13) 4 is
    (14) 4 the
    (15) 5 question
    (16) 6 - (cd)
    (17) 6 - (gh)
    (18) 6 - (cd)
    (19) 6 - (gh)

    Sample Output
    sorted = [['-', '-', '-', '-', '-', 'to'], ['be', 'or'], ['not', 'to'], ['be'], ['-', 'that', 'is', 'the'], ['question'], ['-', '-', '-', '-'], [], [], [], []]
    - - - - - to be or not to be - that is the question - - - -
*/

function countSort(arr) {
    const MAX = 100;
    const n = arr.length;

    const frequencies = new Array(MAX)
        .fill('')
        .map(() => ({ frequency: 0, strings: [] }))

    for (let i=0; i<n; i++) {
        frequencies[arr[i][0]].frequency += 1
        if (i < n /2) {
            arr[i][1] = '-'
        }
        frequencies[arr[i][0]].strings.push(arr[i][1])
    }

    const ordered = []

    for (let j=0; j<MAX; j++) {
        let { frequency } = frequencies[j]
        if (frequency > 0) {
            let { strings } = frequencies[j]
            ordered.push(strings)
        }
    }
    console.log(ordered)
    console.log(ordered.flat().join(' '))
}

const arr = [
    [0, 'ab'],
    [6, 'cd'],
    [0, 'ef'],
    [6, 'gh'],
    [4, 'ij'],
    [0, 'ab'],
    [6, 'cd'],
    [0, 'ef'],
    [6, 'gh'],
    [0, 'ij'],
    [4, 'that'],
    [3, 'be'],
    [0, 'to'],
    [1, 'be'],
    [5, 'question'],
    [1, 'or'],
    [2, 'not'],
    [4, 'is'],
    [2, 'to'],
    [4, 'the'],
];

countSort(arr);

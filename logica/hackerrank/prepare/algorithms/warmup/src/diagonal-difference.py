#!/bin/python3

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#


def diagonalDifference(arr: list[list[int]]) -> int:
    """
    https://www.hackerrank.com/challenges/diagonal-difference

    Given a square matrix, calculate the absolute difference between
    the sums of its diagonals.

    For example, the square matrix  is shown below:

        1 2 3
        4 5 6
        9 8 9

    The left-to-right diagonal = 1 + 5 + 9 = 15.
    The right to left diagonal = 3 + 8 + 9 = 17.
    Their absolute difference is |15-17| = 2

    Function description
    --------------------

    Complete the diagonalDifference function in the editor below.

    diagonalDifference takes the following parameter:

        * int arr[n][m]: an array of integers

    Return
    ------

        * int: the absolute diagonal difference

    Input Format
    ------------

    The first line contains a single integer, n, the number of rows and
    columns in the square matrix arr.
    Each of the next n lines describes a row, arr[i], and consists
    of n space-separated integers arr[i][j].

    Constraints
    -----------

    -100 <= arr[i][j] <= 100

    Output Format
    -------------

    Return the absolute difference between the sums of the matrix's
    two diagonals as a single integer.
    """
    sum = 0
    i_len = len(arr)
    j_len = len(arr[0])

    for i in range(i_len):
        for j in range(j_len):
            if (i == j):
                sum += arr[i][j]
                sum -= arr[i][j_len - j - 1]
    return abs(sum)


if __name__ == "__main__":
    # fptr = open(os.environ["OUTPUT_PATH"], "w")

    # n = int(input().strip())

    # arr = []

    # for _ in range(n):
    #     arr.append(list(map(int, input().rstrip().split())))

    # result = diagonalDifference(arr)

    # fptr.write(str(result) + "\n")

    # fptr.close()
    arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
    sum = diagonalDifference(arr)
    print(sum)

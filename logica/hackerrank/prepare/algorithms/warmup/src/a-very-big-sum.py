#!/bin/python3

import os

#
# Complete the 'aVeryBigSum' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts LONG_INTEGER_ARRAY ar as parameter.
#


def aVeryBigSum(ar: list[int]) -> int:
    """
    https://www.hackerrank.com/challenges/a-very-big-sum
    In this challenge, you are required to calculate and print the sum
    of the elements in an array, keeping in mind that some of those integers
    may be quite large.

    Function Description
    --------------------

    Complete the aVeryBigSum function in the editor below.
    It must return the sum of all array elements.

    aVeryBigSum has the following parameter(s):

        * int ar[n]: an array of integers .

    Return
    ------

        * long: the sum of all array elements

    Input Format
    ------------

    The first line of the input consists of an integer .
    The next line contains  space-separated integers contained in the array.

    Output Format
    -------------

    Return the integer sum of the elements in the array.

    Constraints
    -----------
    1 <= n <= 10
    0 <= ar[i] <= 10^10
    """
    sum = 0
    for i in range(len(ar)):
        sum += ar[i]
    return sum


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = aVeryBigSum(ar)

    fptr.write(str(result) + "\n")

    fptr.close()

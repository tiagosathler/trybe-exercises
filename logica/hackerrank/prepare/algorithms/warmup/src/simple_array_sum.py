#!/bin/python3

import os

#
# Complete the 'simpleArraySum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY ar as parameter.
#


def simpleArraySum(ar: list[int]) -> int:
    """
    Given an array of integers, find the sum of its elements.

    For example, if the array ar = [1, 2, 3], 1 + 2 + 3, so return 6.

    Function Description

    Complete the simpleArraySum function in the editor below. It must return
    the sum of the array elements as an integer.

    simpleArraySum has the following parameter(s):

        * ar: an array of integers

    Input Format
    ------------

    The first line contains an integer, n, denoting the size of the array.
    The second line contains n space-separated integers representing
    the array's elements.

    Output Format
    -------------

    Print the sum of the array's elements as a single integer.
    """
    result = 0
    for value in ar:
        result += value
    return result


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = simpleArraySum(ar)

    fptr.write(str(result) + "\n")

    fptr.close()

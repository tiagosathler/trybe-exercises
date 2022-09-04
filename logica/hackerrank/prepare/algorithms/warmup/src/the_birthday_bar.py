#!/bin/python3

# import math
# import random
# import re
# import sys
import os

#
# Complete the 'birthday' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY s
#  2. INTEGER d
#  3. INTEGER m
#


def birthday(s, d, m):
    """
    https://www.hackerrank.com/challenges/the-birthday-bar
    """
    # Write your code here
    if len(s) == 1:
        if s[0] == d or s[0] == m:
            return 1

    if len(s) < m:
        return 0

    count = 0
    loop = 1
    for n in range(len(s) - m + 1):
        loop += 1
        sum = 0
        sub_s = s[n:m + n]
        for value in sub_s:
            sum += value

        if sum == d:
            count += 1
    print("loop", loop)
    print("len", len(s))
    print("segment len", m)
    print(sub_s)
    return count


if __name__ == "__main__":
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    s = list(map(int, input().rstrip().split()))

    first_multiple_input = input().rstrip().split()

    d = int(first_multiple_input[0])

    m = int(first_multiple_input[1])

    result = birthday(s, d, m)

    fptr.write(str(result) + '\n')

    fptr.close()

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'kangaroo' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER x1 - m
#  2. INTEGER v1 - m/jump
#  3. INTEGER x2 - m
#  4. INTEGER v2 - m/jump
#

def kangaroo(x1, v1, x2, v2):
    """
    https://www.hackerrank.com/challenges/kangaroo
    You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

    The first kangaroo starts at location  and moves at a rate of  meters per jump.
    The second kangaroo starts at location  and moves at a rate of  meters per jump.
    You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

    Example




    After one jump, they are both at , (, ), so the answer is YES.

    Function Description

    Complete the function kangaroo in the editor below.

    kangaroo has the following parameter(s):

    int x1, int v1: starting position and jump distance for kangaroo 1
    int x2, int v2: starting position and jump distance for kangaroo 2
    Returns

    string: either YES or NO
    Input Format

    A single line of four space-separated integers denoting the respective values of , , , and .

    Constraints

    Sample Input 0

    0 3 4 2
    Sample Output 0

    YES
    Explanation 0

    The two kangaroos jump through the following sequence of locations:

    image

    From the image, it is clear that the kangaroos meet at the same location (number  on the number line) after same number of jumps ( jumps), and we print YES.

    Sample Input 1

    0 2 5 3
    Sample Output 1

    NO
    Explanation 1

    The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.
    """
    # x(j) = x1 + v1*j = x2 + v2*j
    # j = (x2 - x1)/(v1 - v2)
    delta_x = x2 - x1
    delta_v = v1 - v2

    if ((delta_x < 0 and delta_v > 0) or (delta_x != 0 and delta_v == 0)):
        return 'NO'

    j = delta_x / delta_v

    if ( j >= 0 and j % 1 == 0):
        return 'YES'

    return 'NO'


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    x1 = int(first_multiple_input[0])

    v1 = int(first_multiple_input[1])

    x2 = int(first_multiple_input[2])

    v2 = int(first_multiple_input[3])

    result = kangaroo(x1, v1, x2, v2)

    fptr.write(result + '\n')

    fptr.close()
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'staircase' function below.
#
# The function accepts INTEGER n as parameter.
#

def staircase(n):
    """
    https://www.hackerrank.com/challenges/staircase
    Staircase detail

    This is a staircase of size :

       #
      ##
     ###
    ####
    Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

    Write a program that prints a staircase of size .

    Function Description

    Complete the staircase function in the editor below.

    staircase has the following parameter(s):

    int n: an integer
    Print

    Print a staircase as described above.

    Input Format

    A single integer, , denoting the size of the staircase.

    Constraints

     .

    Output Format

    Print a staircase of size  using # symbols and spaces.

    Note: The last line must have  spaces in it.

    Sample Input

    6
    Sample Output

         #
        ##
       ###
      ####
     #####
    ######
    Explanation

    The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .
    """
    for i in range(n):
        result = " " * (n - 1 - i)
        result += "#" * (i + 1)
        print(result)

if __name__ == '__main__':
    n = int(input().strip())

    staircase(n)

#!/bin/python3

import math

# import os

# import random
# import re
# import sys

#
# Complete the 'migratoryBirds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#


def migratoryBirds(arr: list[int]) -> int:
    """
    https://www.hackerrank.com/challenges/migratory-birds
    """
    # Write your code here
    birds = dict.fromkeys(arr, 0)
    id_ref = math.inf
    count_ref = -math.inf
    for id in birds.keys():
        birds[id] = arr.count(id)
        if birds[id] > count_ref:
            id_ref = id
            count_ref = birds[id]
        elif birds[id] == count_ref and id < id_ref:
            id_ref = id
            count_ref = birds[id]
    return id_ref


if __name__ == "__main__":
    # fptr = open(os.environ["OUTPUT_PATH"], "w")

    # arr_count = int(input().strip())

    # arr = list(map(int, input().rstrip().split()))
    arr = [1, 4, 4, 4, 5, 3]

    result = migratoryBirds(arr)
    print(result)

    # fptr.write(str(result) + "\n")

    # fptr.close()

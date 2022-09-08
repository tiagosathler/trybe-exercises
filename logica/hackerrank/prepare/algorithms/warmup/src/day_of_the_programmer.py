#!/bin/python3

# import math
# import os
import datetime

# import random
# import re
# import sys

#
# Complete the 'dayOfProgrammer' function below.
#
# The function is expected to return a STRING.
# The function accepts INTEGER year as parameter.
#


def dayOfProgrammer(year: int) -> str:
    """
    https://www.hackerrank.com/challenges/day-of-the-programmer
    """
    # Write your code here
    days = 255
    date = datetime.datetime(year, 1, 1)
    if year < 1919 and year % 4 == 0 and year % 400 != 0 and year % 100 == 0:
        days -= 1
    elif year == 1918:
        days += 13
    date = date + datetime.timedelta(days=days)
    return date.strftime("%d.%m.%Y")


if __name__ == "__main__":
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # year = int(input().strip())
    # year = 1700 # 12.09.1700
    # year = 1800  # 12.09.1700
    # year = 1820  # 12.09.1820
    # year = 1916  # 12.09.1916
    # year = 1836  # 12.09.1916
    # year = 1872  # 12.09.1872
    # year = 1832  # 12.09.1832
    # year = 1880  # 12.09.1880
    # year = 1812  # 12.09.1812
    # year = 1820  # 12.09.1820
    year = 1918  # 26.09.1820

    result = dayOfProgrammer(year)
    print(result)

    # fptr.write(result + '\n')

    # fptr.close()

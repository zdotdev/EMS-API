# -*- coding: utf-8 -*-
"""
Created on Tue Jul  9 12:52:24 2024

@author: MSI Laptop
"""

grid = [
    [4, 3, 0, 5, 0, 6, 9, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 0],
    [6, 0, 0, 4, 0, 9, 8, 0, 0],
    [0, 0, 0, 0, 2, 0, 5, 0, 0],
    [0, 0, 6, 3, 0, 5, 0, 0, 7],
    [3, 0, 0, 0, 8, 0, 0, 0, 0]
]


def is_safe(grid, row, col, num):
    # Check the number in the row
    for x in range(9):
        if grid[row][x] == num:
            return False

    # Check the number in the column
    for x in range(9):
        if grid[x][col] == num:
            return False

    # Check the number in the 3x3 box
    start_row, start_col = row - row % 3, col - col % 3
    for i in range(3):
        for j in range(3):
            if grid[i + start_row][j + start_col] == num:
                return False
    return True

def find_unfilled_cell(grid):
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 0:
                return i, j  # row, col
    return None


def solve_sudoku(grid):
    find = find_unfilled_cell(grid)
    if not find:
        return True
    else:
        row, col = find

    for num in range(1, 10):  # Numbers from 1 to 9
        if is_safe(grid, row, col, num):
            grid[row][col] = num

            if solve_sudoku(grid):
                return True

            grid[row][col] = 0  # Reset cell if no solution found

    return False


solve_sudoku(grid)
print(grid)

test = [
        [4, 3, 8, 5, 7, 6, 9, 2, 1], 
        [5, 9, 2, 1, 4, 3, 7, 6, 8], 
        [7, 6, 1, 8, 9, 2, 4, 3, 5], 
        [9, 5, 7, 2, 6, 8, 3, 1, 4], 
        [2, 8, 4, 7, 3, 1, 6, 5, 9], 
        [6, 1, 3, 4, 5, 9, 8, 7, 2], 
        [1, 7, 9, 6, 2, 4, 5, 8, 3], 
        [8, 4, 6, 3, 1, 5, 2, 9, 7], 
        [3, 2, 5, 9, 8, 7, 1, 4, 6]]
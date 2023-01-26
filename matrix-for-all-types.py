def matrix_determinant(matrix):
    if len(matrix) == 2:
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    else:
        determinant = 0
        for i in range(len(matrix)):
            submatrix = matrix[1:]
            for j in range(len(submatrix)):
                submatrix[j] = submatrix[j][0:i] + submatrix[j][i+1:]
            determinant += ((-1) ** i) * matrix[0][i] * matrix_determinant(submatrix)
        return determinant
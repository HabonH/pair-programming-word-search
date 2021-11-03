/*For this challenge, you'll be implementing
a word search solver, as a function that
receives a 2D array of letters and a word. The function must:

Check to find the word horizontally and
vertically
Return true if the word is found, and
return false if the word is not found
*/
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)) {
          return true;
        } 
        
    }
    const columnTranspose = function (matrix) {
        let newMatrix= []; 
        
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                //console.log("element", matrix[y][x]) 
                //console.log("column, row", y, x) 
                // Original position = y, x; 
                if (newMatrix[x] === undefined) {
                    newMatrix[x] = [];
                }// New position = x, y;
                newMatrix[x][y] = matrix[y][x];
                //printMatrix(matrix);
                //printMatrix(newMatrix);
            }
            // return transpose[y][x]
        }
        return newMatrix;
    };
    
    const verticalJoin = columnTranspose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        } 
    }
    return false;
};
    
    
  
module.exports = wordSearch;
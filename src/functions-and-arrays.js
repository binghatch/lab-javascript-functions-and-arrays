// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (!words.length) {
    return null;
  } else if (words.length === 1) {
    return words[0];
  } else {
    return words.sort((a, b ) => b.length - a.length)[0];
  }
}


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}


// Iteration #3.1 Bonus:
function sum(dataArray) {
  let sum = 0;
  for (let element of dataArray) {
    switch (typeof element) {
      case "number":
      case "boolean":
        sum += element;
        break;
      case "string":
        sum += element.length;
        break;
      default:
        throw new Error("Unsupported data type sir or ma'am");
        break;
    }
  }
  return sum;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length) {
    return sumNumbers(numbers) / numbers.length;
  } else {
    return null;
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(stringArray) {
  if (stringArray.length) {
    sum = 0;
    for (let string of stringArray) {
      sum += string.length;
    }
    return parseInt(sum / stringArray.length);
  } else {
    return null;
  }
}

// Bonus - Iteration #4.1
function avg(dataArray) {
  if (dataArray.length) {
    let sum = 0;
    for (let element of dataArray) {
      switch (typeof element) {
        case "number":
        case "boolean":
          sum += element;
          break;
        case "string":
          sum += element.length;
          break;
        default:
          throw new Error("Unsupported data type sir or ma'am");
          break;
      }
    }
    return sum / dataArray.length;
  } else {
    return null;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if(array.length) {
    let cleanedArray = [];
    for (let element of array) {
      if (!cleanedArray.includes(element)) {
        cleanedArray.push(element);
      }
    } return cleanedArray;
  } else {
    return null;
  }
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordList, searchWord) {
  return (wordList.length) ? wordList.includes(searchWord) : null;
}


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordList, searchWord) {
  if (wordList.length) {
    let occurances = 0;
    for (let word of wordList) {
      if (word === searchWord) {
        console.log(word);
        occurances++;   
      } else {
        continue;
      }
    } 
    return occurances;
  } else {
    return 0;
  }
}


// Iteration #8: Bonus
const matrix = [
  [8 , 2 , 22, 97, 38, 15, 0 , 40, 0 , 75, 4 , 5 , 7 , 78, 52, 12, 50, 77, 91, 8 ],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4 , 56, 62, 0 ],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3 , 49, 13, 36, 65],
  [52, 70, 95, 23, 4 , 60, 11, 42, 69, 24, 68, 56, 1 , 32, 56, 71, 37, 2 , 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3 , 45, 2 , 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2 , 62, 12, 20, 95, 63, 94, 39, 63, 8 , 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5 , 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9 , 75, 0 , 76, 44, 20, 45, 35, 14, 0 , 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3 , 80, 4 , 62, 16, 14, 9 , 53, 56, 92],
  [16, 39, 5 , 42, 96, 35, 31, 47, 55, 58, 88, 24, 0 , 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0 , 48, 35, 71, 89, 7 , 5 , 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5 , 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4 , 89, 55, 40],
  [4 , 52, 8 , 83, 97, 35, 99, 16, 7 , 99, 99, 0 , 0 , 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3 , 99, 0 , 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4 , 42, 16, 73, 38, 25, 39, 11, 24, 0 , 72, 90, 8 , 46, 29, 32, 40, 62, 76, 99],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 0 , 99, 69, 99, 67, 59, 85, 74, 4 , 0 , 16],
  [20, 73, 35, 29, 78, 31, 90, 1 , 74, 31, 49, 71, 48, 86, 81, 16, 23, 0 , 5 , 54],
  [1 , 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1 , 0 , 19, 67, 48]
];

function greatestProduct(matrix) {
  
  // Get row length
  const rowLength = matrix[0].length;
  console.log(rowLength);
  
  // Get number of rows and columns
  const rowNumber = matrix.length;
  const columnNumber = matrix.length;
  console.log(rowNumber);
  
  // Dissolve two-dimensional array into one array
  let allValues = [];
  for (let row of matrix) {
    for (let value of row) {
      allValues.push(value);
    }
  }
  
  // Define steps that correspond to a direction
  const dir = {
    horizontal: 4,
    vertical: 20,
    diagonalLTR: 21,
    diagonalRTL: 19
  }
  
  // Create a variable for the step count
  const step = 4;
  
  // Create an array that stores all products
  let products = [];
  
  // Calculate product per groups of 4 horizontal values
  // Loop through each row
  for (let i = 0; i < rowNumber; i++) {
    // Loop through each character as long as there are enough characters in the row left
    for (let j = rowLength * i; j < rowLength * (i + 1) - 3; j++) {
      let product = 1;
      // Iterate for 4 indexes ahead from current character
      for (let k = j; k <= j + step - 1; k++) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }
  
  // Calculate product per groups of 4 vertical values
  // Loop through each row until it reaches row 17
  for (let i = 0; i < columnNumber - (step - 1); i++) {
    // Loop through each character until the end of the row
    //console.log(i);
    for (let j = i * dir.vertical; j < rowLength * i; j++) {
      let product = 1;
      // Iterate for 20 indexes ahead from current character
      for (let k = j; k <= j + (step - 1) * dir.vertical; k += dir.vertical) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }
  
  // Calculate product per groups of 4 LTRTTB values
  // Loop through each row until it reaches row 17
  for (let i = 0; i < columnNumber - (step - 1); i++) {
    // Loop through each character as long as there are enough characters in the row left
    for (let j = rowLength * i; j < rowLength * (i + 1) - 3; j++) {
      let product = 1;
      // Iterate for 21 indexes ahead from current character
      for (let k = j; k <= j + (step - 1) * dir.diagonalLTR; k += dir.diagonalLTR) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }
  
  // Calculate product per groups of 4 right-to-left diagonal values
  // Loop through each row until it reaches row 17
  for (let i = 0; i < columnNumber - (step - 1); i++) {
    // Loop through each character until the end of the row
    for (let j = i * rowLength + 3; j < rowLength * (i + 1); j++) {
      let product = 1;
      // Iterate for 4 indexes ahead from current character
      for (let k = j; k <= j + (step - 1) * dir.diagonalRTL; k += dir.diagonalRTL) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }

  var largest = Math.max.apply(0, products);
  return largest;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}

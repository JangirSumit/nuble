function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

function matrixToList(matrix) {
  var list = [];
  let i = 0;

  while (matrix[i]) {
    list.push(...matrix[i]);
    i++;
  }

  return list;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function calculate2dPosition(matSize, index) {
  let position = [0, 0];
  let count = 0;
  let gotIt = false;

  for (let i = 0; i < matSize; i++) {
    for (let j = 0; j < matSize; j++) {
      if (count === index) {
        position = [i, j];
        gotIt = true;
        break;
      } else {
        count++;
      }
    }

    if (gotIt) {
      break;
    }
  }

  return position;
}

export { listToMatrix, shuffle, calculate2dPosition, matrixToList };

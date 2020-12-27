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
  let position = [-1, -1];
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

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function changePositionWithBlank(list, position, matSize) {
  let matrix = listToMatrix(list, matSize);
  let [i, j] = position;

  let PossiblePositions = [
    [i - 1, j],
    [i, j - 1],
    [i + 1, j],
    [i, j + 1],
  ];

  for (let index = 0; index < PossiblePositions.length; index++) {
    let [a, b] = PossiblePositions[index];
    if (checkForMatrixBoundryLimit([a, b], matSize) && !matrix[a][b]) {
      // Blank is in range of clicked element
      let temp = matrix[i][j];
      matrix[i][j] = matrix[a][b];
      matrix[a][b] = temp;
      break;
    }
  }
  return matrixToList(matrix);
}

function checkForMatrixBoundryLimit(position, matSize) {
  return (
    position[0] > -1 &&
    position[0] < matSize &&
    position[1] > -1 &&
    position[1] < matSize
  );
}

function checkGameCompleted(list, matSize) {
  let count = 0;
  for (let index = 0; index < matSize * matSize - 1; index++) {
    if (list[index] === index + 1) {
      count++;
    } else {
      break;
    }
  }
  return count === matSize * matSize - 1;
}

export {
  listToMatrix,
  shuffle,
  calculate2dPosition,
  matrixToList,
  millisToMinutesAndSeconds,
  changePositionWithBlank,
  checkGameCompleted,
};

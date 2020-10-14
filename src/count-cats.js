module.exports = function countCats(matrix) {
  return matrix
    .map((innerArray) =>
      innerArray.reduce(
        (accumulator, currentValue) =>
          accumulator + (currentValue === "^^" ? 1 : 0),
        0
      )
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

module.exports = function countCats(matrix) {
  const array = matrix.flat();
  let total = 0;
  if (array.length === 0) {
    return total;
  }
  array.forEach((element) => {
    if (element === "^^") {
      total = total + 1;
    }
  });
  return total;
};

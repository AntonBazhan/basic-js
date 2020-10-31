module.exports = function transform(arr) {
  const array = [...arr];
  array.map((element, index) => {
    if (element === "--discard-next") {
      // if (element.length < index) {
      //   array.splice(index, 1);
      // }
      array.splice(index, 2, "delete");
    } else if (element === "--discard-prev") {
      if (index === 0) {
        array.splice(0, 1);
      } else {
        array.splice(index - 1, 2, "delete");
      }
    } else if (element === "--double-prev") {
      if (index === 0) {
        array.splice(0, 1);
      } else {
        array.splice(index, 1, array[index - 1]);
      }
    } else if (element === "--double-next") {
      if (array.length === index + 1) {
        array.pop();
      } else {
        array.splice(index, 1, array[index + 1]);
      }
    }
  });

  return array.filter((element) => element !== "delete");
};

const sumItems = (array) => {
  // Sum all the numbers in the array
  let sum = 0;
  if (array.length === 1 && !Array.isArray(array[0])) return array[0];
  // const lastEl = array[array.length - 1];
  // const result = lastEl +  sumItems(array.pop());
  // return result;
  array.forEach(arr => {
    if (Array.isArray(arr)) {
      if (arr === []) return 0;
      sum += sumItems(arr);
    } else {
      sum += arr;
    }
  });
  return sum;
};

module.exports = sumItems;

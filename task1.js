const common = ([1, 2, 3], [5, 3, 2], [7, 3, 2]);
const common2 = ([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]);

function getSum(arr1, arr2, arr3) {
  const values = arr1.map((element) => {
    return arr2.includes(element) && arr3.includes(element) ? element : 0;
  });
  return values.reduce((acc, element) => acc + element);
}

console.log(getSum([1, 2, 3], [5, 3, 2], [7, 3, 2]));
console.log(getSum([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));

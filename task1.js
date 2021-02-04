const common = ([1, 2, 3], [5, 3, 2], [7, 3, 2]);
const common2 = ([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]);

function getSum(arr1, arr2, arr3) {
  return arr1.map((element) => arr2.includes(element) && arr3.includes(element) ? element : 0).reduce((acc, element) => acc + element);
}

console.log(getSum([1, 2, 3], [5, 3, 2], [7, 3, 2]));
console.log(getSum([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));

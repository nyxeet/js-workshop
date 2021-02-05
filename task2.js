function moveZeros(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
      array.splice(i, 1);
      array.push(0);
    }
  }
  return array;
}
// мутирует массив))))))

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

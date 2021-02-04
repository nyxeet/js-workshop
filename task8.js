function f(num1, num2) {
  if (num2) {
    return num1 + num2;
  }
  return function (num2) {
    return num1 + num2;
  };
}

console.log(f(2, 3));
console.log(f(2)(3));

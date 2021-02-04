Number.prototype.plus = function (number) {
  return this.valueOf() + number;
};
Number.prototype.minus = function (number) {
  return this.valueOf() - number;
};
console.log((2).plus(3).minus(1));

function func1(...args) {
  const sortArray = args.map((element) =>
    element.toLowerCase().split("").sort().join("")
  );
  console.log(sortArray);

  for (let i = 1; i < sortArray.length; i += 1) {
    if (sortArray[i - 1] !== sortArray[i]) {
      return "NO";
    }
  }
  return "YES";
}

console.log(func1('кот', 'ток', 'окт'));

var arr = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];

function getObject(array) {
  const newObject = {};
  for (const element of array) {
    const newArray = Object.values(element);
    newObject[newArray[0]] = newArray[1];
  }
  return newObject;
}

console.log(getObject(arr));

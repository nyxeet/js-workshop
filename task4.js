const students = [
  { name: "Olha", gender: "female" },
  { name: "Oleh", gender: "male" },
  { name: "Kristi", gender: "female" },
];

function sortByGender(students) {
  let result = { male: [], female: [] };
  students.forEach((element) => {
    if (element.gender == "female") {
      result.female.push(element);
    } else {
      result.male.push(element);
    }
  });
  return result;
}
console.log(sortByGender(students));

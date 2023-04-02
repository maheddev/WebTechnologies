const array = [
  {
    name: "Mahed",
    className: "Fa20-Bcs-A",
    section: "B",
    gender: "Male",
  },
  {
    name: "Shahzad",
    className: "Fa20-Bcs-A",
    section: "B",
    gender: "Male",
  },
  {
    name: "Nasir",
    className: "Fa20-Bcs-B",
    section: "A",
    gender: "Male",
  },
  {
    name: "Angela",
    className: "Fa20-Bcs-B",
    section: "B",
    gender: "Female",
  },
  {
    name: "Dogar",
    className: "Fa20-Bcs-B",
    section: "A",
    gender: "Male",
  },
];

array.push({
  name: "Julia",
  className: "Fa20-Bcs-B",
  section: "A",
  gender: "Female",
});

// console.log(array);
const filter = array.filter((i) => {
  return i.section == "A";
});
// console.log(filter);

array.map((i) => {
  if (i.className == "Fa20-Bcs-B") {
    i.section = "B";
  } else if (i.className == "Fa20-Bcs-A") {
    i.section = "A";
  }
});
// console.log(array)
array.forEach((element) => {
  var prefix = "";
  var pronoun1 = "";
  var pronoun2 = "";

  if (element.gender == "Female") {
    prefix = "Ms.";
    pronoun1 = "she";
    pronoun2 = "her";
  } else {
    prefix = "Mr.";
    pronoun1 = "he";
    pronoun2 = "his";
  }

  const newString = `The Section of ${prefix} ${element.name} is ${
    element.section
  }, ${pronoun1} belongs to the batch ${element.className
    .split("-")[0]
    .toLocaleUpperCase()} and ${pronoun2} Department is ${(
    element.className.split("-")[1].split("")[1] +
    element.className.split("-")[1].split("")[2]
  ).toLocaleUpperCase()}`;

  console.log(newString);
});

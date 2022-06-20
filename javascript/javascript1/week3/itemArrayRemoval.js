// ITEM ARRAY REMOVAL

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

// const indexOfNameToRemove = names.indexOf(nameToRemove);
// names.splice(indexOfNameToRemove, 1);

function removeName(nameToRemove) {
  const indexOfNameToRemove = names.indexOf(nameToRemove);
  names.splice(indexOfNameToRemove, 1);
}
removeName(nameToRemove);
console.log(names);

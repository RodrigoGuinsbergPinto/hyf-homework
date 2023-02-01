const arguments = process.argv.slice(2);

const average =
  arguments.reduce((acc, val) => acc + parseInt(val), 0) / arguments.length;

if (isNaN(average)) {
  console.log("Only numbers are accepted as arguments.");
} else {
  console.log(average);
}

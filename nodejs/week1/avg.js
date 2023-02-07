const args = process.argv.slice(2);

const average = args.reduce((acc, val) => acc + parseInt(val), 0) / args.length;

if (isNaN(average)) {
  console.log("Only numbers are accepted as arguments.");
} else {
  console.log(average);
}

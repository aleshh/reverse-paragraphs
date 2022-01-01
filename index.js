const fs = require("fs");

function ohWell() {
  console.log(`That didn't work. I blame Alesh. 😤`);
  process.exit();
}

const file = process.argv[2];

if (!file) ohWell();

try {
  const data = fs.readFileSync(file, { encoding: "utf8" });
  const lines = data.split("\n\n").reverse().join("\n\n");

  console.log(lines);
} catch (e) {
  ohWell();
}

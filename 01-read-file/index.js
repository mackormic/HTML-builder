const path = require("path");
const fs = require("fs");
const { stdout } = require("process");

fs.readFile(path.join(__dirname, "text.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  //   console.log(data);
  stdout.write(data);
  process.exit();
});

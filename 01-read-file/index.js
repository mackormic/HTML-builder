// const path = require("path");
// const fs = require("fs");
// const { stdout } = require("process");

// fs.readFile(path.join(__dirname, "text.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   //   console.log(data);
//   stdout.write(data);
//   process.exit();
// });
const path = require("path");
const fs = require("fs");
const stream = new fs.ReadStream(path.join(__dirname, "text.txt"), {
  encoding: "utf-8",
});
stream.on("readable", function () {
  const data = stream.read();
  if (data != null) console.log(data);
});

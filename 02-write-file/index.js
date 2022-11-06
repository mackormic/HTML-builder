const path = require("path");
const fs = require("fs");
const { stdin, stdout, exit } = process;

fs.writeFile(path.join(__dirname, "text.txt"), "Start project\n", (err) => {
  if (err) throw err;
  console.log("file created");
});

stdout.write("So, we are start\n");
stdin.on("data", (data) => {
  stdout.write("можно тыкать дальше, все вроде ок\n");
  fs.appendFile(path.join(__dirname, "text.txt"), `${data}\n`, (err) => {
    if (err) throw err;
    console.log("файл был изменен");
  });
});

// process.on("SIGINT", () => stdout.write("Good  luck"));
// process.exit();

function signalHandler() {
  console.log("Завершение работы, давай по новой");
  process.exit();
}

process.on("SIGINT", signalHandler);

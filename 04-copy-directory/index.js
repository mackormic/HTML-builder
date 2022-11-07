const fs = require("fs");
const path = require("path");
const { text } = require("stream/consumers");

const pathFiles = path.join(__dirname, "files");
const pathFilesCopy = path.join(__dirname, "files-copy");
console.log(path.join(__dirname, "files", "test-text.txt"));
console.log(path.join(__dirname, "files-copy", "test-text.txt"));

// НЕЛЬЗЯ КОПИРОВАТЬ ПАПКИ, ТОЛЬКО ФАЙЛЫ
// fs.copyFile(
//   path.join(__dirname, "files"),
//   path.join(__dirname, "files-copy"),
//   (err) => {
//     if (err) throw err; // не удалось скопировать файл
//     console.log("Файл успешно скопирован");
//   }
// );

// ------------создние папки-------------
// fs.mkdir(path.join(__dirname, "files-copy"), (err) => {
//   if (err) throw err;
//   console.log("Папка была создана");
// });
function copyDir() {
  fs.readdir(pathFiles, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      fs.copyFile(
        pathFiles + "/" + data[i],
        pathFilesCopy + "/" + data[i],
        (err) => {
          if (err) throw err;
          console.log("all ok");
        }
      );
    }
  });
}

copyDir();

const fs = require("fs");
const path = require("path");

// fs.readdir(path.join(__dirname, "secret-folder"), (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   data.forEach((file) => {
//     fs.stat(path.join(__dirname, "secret-folder"), (err, item) => {
//       if (err) throw err;
//       const newPath = path.join(__dirname, "secret-folder");
//       const truePath = `${newPath}/${file}`;
//       console.log(truePath);
//     });
//     console.log(file);
//   });
// });

// Работате кроме размера

// fs.readdir(path.join(__dirname, "secret-folder"), (err, data) => {
//   if (err) throw err;
//   console.log(data);

//   data.forEach((file) => {
//     fs.stat(path.join(__dirname, "secret-folder"), (err, stats) => {
//       if (err) throw err;
//       const newPath = path.join(__dirname, "secret-folder");
//       const truePath = `${newPath}/${file}`;
//       const name = path.basename(truePath, path.extname(truePath));
//       const extention = path.extname(truePath);
//       const size = stats.size;
//       console.log(`${name} - ${extention} - ${size}`);
//     });
//     // console.log(file);
//   });
// });

// fs.stat(path.join(__dirname, "secret-folder", "text.txt"), (err, stats) => {
//   if (err) throw err;
//   console.log(stats.size);
// });

// -------------- ТУТ все работат------------------

fs.readdir(path.join(__dirname, "secret-folder"), (err, data) => {
  if (err) throw err;
  //   console.log(data);

  data.forEach((file) => {
    const newPath = path.join(__dirname, "secret-folder");
    const truePath = `${newPath}/${file}`;
    fs.stat(path.join(truePath), (err, stats) => {
      if (err) throw err;
      if (stats.isFile() === true) {
        const newPath = path.join(__dirname, "secret-folder");
        const truePath = `${newPath}/${file}`;
        const name = path.basename(truePath, path.extname(truePath));
        const extention = path.extname(truePath);
        const size = stats.size;
        console.log(`${name} - ${extention} - ${size} kb`);
      }
    });
    // console.log(file);
  });
});

// fs.stat(path.join(__dirname, "secret-folder", "text.txt"), (err, stats) => {
//   if (err) throw err;

//   console.log(stats.size);
// });

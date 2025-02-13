// для учебы
const fs = require("fs");
const path = require("path");

const projectDist = path.join(__dirname, "project-dist");
const styles = path.join(__dirname, "styles");
const readstyle = fs.createWriteStream(path.join(projectDist, "bundle.css"));

fs.readdir(styles, { withFileTypes: true }, (error, bundle) => {
  if (error) return console.error(error.message);
  bundle.forEach((file) => {
    if (path.extname(file.name) === ".css") {
      fs.readFile(path.join(styles, file.name), (error, data) => {
        if (error) return console.error(error.message);
        readstyle.write(data);
      });
    }
  });
  console.log("created bundle is done");
});

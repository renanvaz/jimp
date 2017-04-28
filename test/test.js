const Jimp = require('../index');
const fs = require('fs');
const path = require('path');

const allFilesSync = (dir, fileList = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file)

    fileList.push(
      fs.statSync(filePath).isDirectory()
        ? {[file]: allFilesSync(filePath)}
        : file
    )
  })
  return fileList
}

const images = allFilesSync('images/').filter((filename) => filename.match(/\.png$/));

images.forEach((filename) => {
    Jimp.read(`images/${filename}`, function (err, file) {
        if (err) throw err;

        file.autocrop({north: false, east: true, south: true, west: false}).write(`out/${filename}`);
    });
});

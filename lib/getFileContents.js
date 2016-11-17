const fs = require('fs');

module.exports = function getFileContents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, body) => {
      if (err) return reject(err);
      return resolve(body);
    });
  });
};

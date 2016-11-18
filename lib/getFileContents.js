const fs = require('fs');

module.exports = function getFileContents(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, body) => {
      if (err) return reject(err);
      return resolve(body);
    });
  });
};

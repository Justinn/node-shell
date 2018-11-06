const fs = require('fs');

const cat = (done, fn) => {
  fs.readFile(`./${fn}`, 'utf8', (err, data) => {
    if (err) throw err;
    done(data);
  });
};

module.exports = cat;

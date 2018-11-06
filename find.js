const { exec } = require('child_process');

module.exports = (done, input) => {
  exec('find ' + input, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    done(stdout);
  });
};

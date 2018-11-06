const { exec } = require('child_process');

module.exports = (done, input) => {
    exec('echo', (err, stdout, stderr) => {
        if(err) {
            console.error(`exec error: ${error}`)
            return;
        }
        done(input);
    })
};

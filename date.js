const { exec } = require('child_process');

module.exports = done => {
    exec('date', (err, stdout, stderr) => {
        if(err) {
            console.error(`exec error: ${error}`)
            return;
        }
        done(`${stdout}`);
    })
};

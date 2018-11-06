const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

const done = output => {
    console.log(output);
    process.stdout.write('prompt >');
  };

process.stdout.write('prompt >');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  let args = cmd.split(' ');
  if (args[0] === 'cat') {
    cat(done, args[1]);
  }
  if (args[0] === 'curl') {
    curl(done, args[1]);
  }
  if (cmd === 'pwd') pwd(done);
  if (cmd === 'ls') ls(done);
});



module.exports = done;

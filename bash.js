const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const date = require('./date');
const echo = require('./echo');
const find = require('./find');

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
  if (cmd === 'date') date(done);
  if (args[0] === 'echo') {
    echo(done, args[1].replace(/'/g, ''));
  }
  if (args[0] === 'find') {
      find(done, args[1]);
  }
});



module.exports = done;

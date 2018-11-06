const request = require('request');

const curl = (done, url) => {
  request(url, function(error, response, body) {
    done(`error: ${error} \nstatus code ${response && response.statusCode}\nbody: ${body}`);
  });
};

module.exports = curl;

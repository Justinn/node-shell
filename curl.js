const request = require('request');

const curl = (done, url) => {
  request(url, function(error, response, body) {
    done(error);
    done(response && response.statusCode);
    done(body);
  });
};

module.exports = curl;

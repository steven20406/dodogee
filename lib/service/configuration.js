'use strict';

class Configuration {
  constructor (app) {
    const config = require('../../config/config');

    app.port = config.port;
  }
}

module.exports = (app) => {
  new Configuration(app);
}
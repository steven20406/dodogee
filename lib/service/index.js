'use strict'

class Services {
  constructor (app) {
    require('./configuration')(app);
    require('./access_logger')(app);
  }
}

module.exports = (app) => {
    new Services (app);
}
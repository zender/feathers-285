'use strict';
const messages = require('./messages');
const authentication = require('./authentication');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(messages);
};

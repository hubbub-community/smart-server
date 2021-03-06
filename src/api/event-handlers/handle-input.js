'use strict';

const { handleCommand } = require('./handle-command.js');
const handleMessage = require('./handle-message.js');

/***
 * Passes input to handleCommand or handleMessage
 * depending on whether the input has a leading slash.
 * @function
 * @name handleInput
 * @param line {string} The input from the client
 * @param socket {object} The socket object from the client event
 * @param io {object} The server-side Socket.io instance
 ***/
const handleInput = (line, socket, io) => {
  console.log('Received input:', line);
  line = line.trim();

  if (line[0] === '/' && line.length > 1) {
    handleCommand(line, socket, io);
  } else {
    handleMessage(line, socket);
  }
};

module.exports = handleInput;

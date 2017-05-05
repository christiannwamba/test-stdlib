/* Import dependencies, declare constants */

/**
* Your function call
* @param {Object} params Execution parameters
*   Members
*   - {Array} args Arguments passed to function
*   - {Object} kwargs Keyword arguments (key-value pairs) passed to function
*   - {String} remoteAddress The IPv4 or IPv6 address of the caller
*
* @param {Function} callback Execute this to end the function call
*   Arguments
*   - {Error} error The error to show if function fails
*   - {Any} returnValue JSON serializable (or Buffer) return value
*/
const ds = require('deepstream.io-client-js');
const moment = require('moment');

module.exports = (params, callback) => {
  const client = ds('wss://154.deepstreamhub.com?apiKey=68b9dab4-e3ea-4987-b6ed-b3c7c83b7c4a').login()
  setInterval(() => {
    client.event.emit('time', moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000)

  // client.event.subscribe('time', () => {
  //   callback(null, );
  // })
  callback(null, 'hello me');
};

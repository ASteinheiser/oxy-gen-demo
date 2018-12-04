const ffi = require('ffi-napi');
const path = require('path');

const randomNumber = ffi.Library(path.join(__dirname, './target/debug/librandom_number'), {
  find: [null, ['int']]
});

module.exports = {
  randomNumber: randomNumber
}

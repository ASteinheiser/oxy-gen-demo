const ffi = require('ffi-napi');
const path = require('path');

const random_number = ffi.Library(path.join(__dirname, './target/debug/librandom_number'), {
  find: [null, ['int']]
});

module.exports = {
  random_number: random_number
}

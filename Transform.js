const stream = require('stream');

const doShift = require('./doShift');

class Transformer extends stream.Transform {
  constructor(action, shift) {
    super();
    this.shift = this._combine(action, shift);
  }
  _combine(action, shift) {
    return action === 'encode' ? +shift : -shift;
  }
  _transform(data, _, callback) {
    this.push(doShift(data.toString(), this.shift));
    callback();
  }
};

module.exports = Transformer;